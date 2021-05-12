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

const KeywordAdd = lazy(() => import('./pages/admin/keywords/KeywordAdd'));
const KeywordEdit = lazy(() => import('./pages/admin/keywords/KeywordEdit'));
const KeywordList = lazy(() => import('./pages/admin/keywords/KeywordList'));
const FaqAdd = lazy(() => import('./pages/admin/faqs/FaqAdd'));
const FaqEdit = lazy(() => import('./pages/admin/faqs/FaqEdit'));
const FaqList = lazy(() => import('./pages/admin/faqs/FaqList'));
const ArticleAdd = lazy(() => import('./pages/admin/articles/ArticleAdd'));
const ArticleEdit = lazy(() => import('./pages/admin/articles/ArticleEdit'));
const ArticleList = lazy(() => import('./pages/admin/articles/ArticleList'));

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

            <Route exact path='/admin/keywords/add' component={KeywordAdd} />
            <Route exact path='/admin/keywords/:id' component={KeywordEdit} />
            <Route exact path='/admin/keywords' component={KeywordList} />
            <Route exact path='/admin/faqs/add' component={FaqAdd} />
            <Route exact path='/admin/faqs/:id' component={FaqEdit} />
            <Route exact path='/admin/faqs' component={FaqList} />

            <Route exact path='/admin/articles/add' component={ArticleAdd} />
            <Route exact path='/admin/articles/:id' component={ArticleEdit} />
            <Route exact path='/admin/articles' component={ArticleList} />
            <Route path='*' component={FourOFour} />
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;
