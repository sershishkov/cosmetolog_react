const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const colors = require('colors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const errorHandler = require('./middleware/error');

const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

const app = express();

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//Sanitize data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Prevent XSS attakes
app.use(xss());

//Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 min
  max: 10000,
});
app.use(limiter);

//Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

createProxyMiddleware('http://localhost:3000/api/**');

/////////////////////////////////////////////////////////
//Route file
////////User////////
const auth = require('./routes/user/auth/auth');

////////Admin////////
const adminUsers = require('./routes/user/admin/adminUsers');

//////////////////common///////////////////////////////////
const kewords = require('./routes/common/keywords');
const faqs = require('./routes/common/faqs');
const articles = require('./routes/common/articles');
const drugs = require('./routes/common/drugs');
const procedures = require('./routes/common/procedures');
const services = require('./routes/common/services');
const reviews = require('./routes/common/reviews');
// const comments = require('./routes/common/comments');

/////////////////////////////////////////////////////
//Mount routes
/////USER/////
app.use('/api/auth', auth);

////////Admin////////
app.use('/api/user-admin', adminUsers);

//////////////////common///////////////////////////////////
app.use('/api/admin/keywords', kewords);
app.use('/api/admin/faqs', faqs);
app.use('/api/admin/articles', articles);
app.use('/api/admin/drugs', drugs);
app.use('/api/admin/procedures', procedures);
app.use('/api/admin/services', services);
app.use('/api/admin/reviews', reviews);
// app.use('/api/admin/comments', comments);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/uploads', express.static('uploads'));
app.use(errorHandler);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV}  on port ${PORT}!`.yellow.bold
  );
});

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promice) => {
  console.log(`Error:${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
