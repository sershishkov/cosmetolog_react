import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './components/layout/Theme';
import { Provider as ReduxProvider } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ruLocale from 'date-fns/locale/ru';
import store from './reduxStore/index';
import Layout from './components/layout/Layout';

ReactDOM.render(
  // <React.StrictMode>
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={MuiTheme}>
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </ReduxProvider>
  </MuiPickersUtilsProvider>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
