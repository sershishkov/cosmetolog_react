import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setAuthToken from './utils/setAuthToken';

import AlertCustom from './components/layout/AlertCustom';
import { loadUser } from './reduxStore/actions/user/auth';

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import CircularProgress from '@material-ui/core/CircularProgress';

import Landing from './pages/Landing';
import FourOFour from './pages/FourOFour';
import Login from './pages/user/auth/Login';
import Register from './pages/user/auth/Register';
import UserOffice from './pages/user/auth/UserOffice';
import CommonAbout from './pages/common/CommonAbout';
import CommonContacts from './pages/common/CommonContacts';
import CommonReviews from './pages/common/CommonReviews';
import CommonServices from './pages/common/CommonServices';
import CommonTeaching from './pages/common/CommonTeaching';
import CommonUsefulInfo from './pages/common/CommonUsefulInfo';

const KeywordAdd = lazy(() => import('./pages/admin/keywords/KeywordAdd'));
const KeywordEdit = lazy(() => import('./pages/admin/keywords/KeywordEdit'));
const KeywordList = lazy(() => import('./pages/admin/keywords/KeywordList'));
const FaqAdd = lazy(() => import('./pages/admin/faqs/FaqAdd'));
const FaqEdit = lazy(() => import('./pages/admin/faqs/FaqEdit'));
const FaqList = lazy(() => import('./pages/admin/faqs/FaqList'));
const ArticleAdd = lazy(() => import('./pages/admin/articles/ArticleAdd'));
const ArticleEdit = lazy(() => import('./pages/admin/articles/ArticleEdit'));
const ArticleList = lazy(() => import('./pages/admin/articles/ArticleList'));

const CommentAdd = lazy(() => import('./pages/admin/comments/CommentAdd'));
const CommentEdit = lazy(() => import('./pages/admin/comments/CommentEdit'));
const CommentList = lazy(() => import('./pages/admin/comments/CommentList'));

const UserAdminAdd = lazy(() => import('./pages/user/admin/UserAdminAdd'));
const UserAdminEdit = lazy(() => import('./pages/user/admin/UserAdminEdit'));
const UserAdminList = lazy(() => import('./pages/user/admin/UserAdminList'));

const ProcedureAdd = lazy(() =>
  import('./pages/admin/procedures/ProcedureAdd')
);
const ProcedureEdit = lazy(() =>
  import('./pages/admin/procedures/ProcedureEdit')
);
const ProcedureList = lazy(() =>
  import('./pages/admin/procedures/ProcedureList')
);

const ReviewAdd = lazy(() => import('./pages/admin/reviews/ReviewAdd'));
const ReviewEdit = lazy(() => import('./pages/admin/reviews/ReviewEdit'));
const ReviewList = lazy(() => import('./pages/admin/reviews/ReviewList'));

const ServiceAdd = lazy(() => import('./pages/admin/services/ServiceAdd'));
const ServiceEdit = lazy(() => import('./pages/admin/services/ServiceEdit'));
const ServiceList = lazy(() => import('./pages/admin/services/ServiceList'));

const useStyles = makeStyles((theme) => ({
  root: {},
}));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, [dispatch]);
  return (
    <Container className={classes.root}>
      <AlertCustom />
      <Router>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/my-office' component={UserOffice} />

            <Route exact path='/about' component={CommonAbout} />
            <Route exact path='/contacts' component={CommonContacts} />
            <Route exact path='/reviews' component={CommonReviews} />
            <Route exact path='/services' component={CommonServices} />
            <Route exact path='/teaching' component={CommonTeaching} />
            <Route exact path='/useful-info' component={CommonUsefulInfo} />

            <Route exact path='/admin/keywords/add' component={KeywordAdd} />
            <Route exact path='/admin/keywords/:id' component={KeywordEdit} />
            <Route exact path='/admin/keywords' component={KeywordList} />
            <Route exact path='/admin/faqs/add' component={FaqAdd} />
            <Route exact path='/admin/faqs/:id' component={FaqEdit} />
            <Route exact path='/admin/faqs' component={FaqList} />

            <Route exact path='/admin/articles/add' component={ArticleAdd} />
            <Route exact path='/admin/articles/:id' component={ArticleEdit} />
            <Route exact path='/admin/articles' component={ArticleList} />

            <Route exact path='/admin/comments/add' component={CommentAdd} />
            <Route exact path='/admin/comments/:id' component={CommentEdit} />
            <Route exact path='/admin/comments' component={CommentList} />

            <Route
              exact
              path='/admin/procedures/add'
              component={ProcedureAdd}
            />
            <Route
              exact
              path='/admin/procedures/:id'
              component={ProcedureEdit}
            />
            <Route exact path='/admin/procedures' component={ProcedureList} />

            <Route exact path='/admin/reviews/add' component={ReviewAdd} />
            <Route exact path='/admin/reviews/:id' component={ReviewEdit} />
            <Route exact path='/admin/reviews' component={ReviewList} />

            <Route exact path='/admin/services/add' component={ServiceAdd} />
            <Route exact path='/admin/services/:id' component={ServiceEdit} />
            <Route exact path='/admin/services' component={ServiceList} />

            <Route exact path='/admin/users/add' component={UserAdminAdd} />
            <Route exact path='/admin/users/:id' component={UserAdminEdit} />
            <Route exact path='/admin/users' component={UserAdminList} />

            <Route path='*' component={FourOFour} />
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;
