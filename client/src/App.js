import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './utils/PrivateRoute';

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

const ArticleAdd = lazy(() => import('./pages/admin/articles/ArticleAdd'));
const ArticleEdit = lazy(() => import('./pages/admin/articles/ArticleEdit'));
const ArticleList = lazy(() => import('./pages/admin/articles/ArticleList'));

const CommentAdd = lazy(() => import('./pages/admin/comments/CommentAdd'));
const CommentEdit = lazy(() => import('./pages/admin/comments/CommentEdit'));
const CommentList = lazy(() => import('./pages/admin/comments/CommentList'));

const DrugAdd = lazy(() => import('./pages/admin/drugs/DrugAdd'));
const DrugEdit = lazy(() => import('./pages/admin/drugs/DrugEdit'));
const DrugList = lazy(() => import('./pages/admin/drugs/DrugList'));

const FaqAdd = lazy(() => import('./pages/admin/faqs/FaqAdd'));
const FaqEdit = lazy(() => import('./pages/admin/faqs/FaqEdit'));
const FaqList = lazy(() => import('./pages/admin/faqs/FaqList'));

const KeywordAdd = lazy(() => import('./pages/admin/keywords/KeywordAdd'));
const KeywordEdit = lazy(() => import('./pages/admin/keywords/KeywordEdit'));
const KeywordList = lazy(() => import('./pages/admin/keywords/KeywordList'));

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

const UserAdminAdd = lazy(() => import('./pages/user/admin/UserAdminAdd'));
const UserAdminEdit = lazy(() => import('./pages/user/admin/UserAdminEdit'));
const UserAdminList = lazy(() => import('./pages/user/admin/UserAdminList'));

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
            <PrivateRoute exact path='/my-office' component={UserOffice} />

            <Route exact path='/about' component={CommonAbout} />
            <Route exact path='/contacts' component={CommonContacts} />
            <Route exact path='/reviews' component={CommonReviews} />
            <Route exact path='/services' component={CommonServices} />
            <Route exact path='/teaching' component={CommonTeaching} />
            <Route exact path='/useful-info' component={CommonUsefulInfo} />

            <PrivateRoute
              exact
              path='/admin/articles/add'
              component={ArticleAdd}
            />
            <PrivateRoute
              exact
              path='/admin/articles/:id'
              component={ArticleEdit}
            />
            <PrivateRoute
              exact
              path='/admin/articles'
              component={ArticleList}
            />

            <PrivateRoute
              exact
              path='/admin/comments/add'
              component={CommentAdd}
            />
            <PrivateRoute
              exact
              path='/admin/comments/:id'
              component={CommentEdit}
            />
            <PrivateRoute
              exact
              path='/admin/comments'
              component={CommentList}
            />

            <PrivateRoute exact path='/admin/drugs/add' component={DrugAdd} />
            <PrivateRoute exact path='/admin/drugs/:id' component={DrugEdit} />
            <PrivateRoute exact path='/admin/drugs' component={DrugList} />

            <PrivateRoute exact path='/admin/faqs/add' component={FaqAdd} />
            <PrivateRoute exact path='/admin/faqs/:id' component={FaqEdit} />
            <PrivateRoute exact path='/admin/faqs' component={FaqList} />

            <PrivateRoute
              exact
              path='/admin/keywords/add'
              component={KeywordAdd}
            />
            <PrivateRoute
              exact
              path='/admin/keywords/:id'
              component={KeywordEdit}
            />
            <PrivateRoute
              exact
              path='/admin/keywords'
              component={KeywordList}
            />

            <PrivateRoute
              exact
              path='/admin/procedures/add'
              component={ProcedureAdd}
            />
            <PrivateRoute
              exact
              path='/admin/procedures/:id'
              component={ProcedureEdit}
            />
            <PrivateRoute
              exact
              path='/admin/procedures'
              component={ProcedureList}
            />

            <PrivateRoute
              exact
              path='/admin/reviews/add'
              component={ReviewAdd}
            />
            <PrivateRoute
              exact
              path='/admin/reviews/:id'
              component={ReviewEdit}
            />
            <PrivateRoute exact path='/admin/reviews' component={ReviewList} />

            <PrivateRoute
              exact
              path='/admin/services/add'
              component={ServiceAdd}
            />
            <PrivateRoute
              exact
              path='/admin/services/:id'
              component={ServiceEdit}
            />
            <PrivateRoute
              exact
              path='/admin/services'
              component={ServiceList}
            />

            <PrivateRoute
              exact
              path='/admin/users/add'
              component={UserAdminAdd}
            />
            <PrivateRoute
              exact
              path='/admin/users/:id'
              component={UserAdminEdit}
            />
            <PrivateRoute exact path='/admin/users' component={UserAdminList} />

            <Route path='*' component={FourOFour} />
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;
