import { configureStore } from '@reduxjs/toolkit';

import nameOfPage from './reducers/nameOfPage';
import alerts from './reducers/alert';
import auth from './reducers/user/auth';
import users from './reducers/user/users';

import keyword from './reducers/admin/keyword';
import faq from './reducers/admin/faq';
import article from './reducers/admin/article';
import comment from './reducers/admin/comment';
import drug from './reducers/admin/drug';
import procedure from './reducers/admin/procedure';
import review from './reducers/admin/review';
import service from './reducers/admin/service';

const store = configureStore({
  reducer: {
    auth,
    users,
    nameOfPage,
    alerts,

    keyword,
    faq,
    article,
    comment,
    drug,
    procedure,
    review,
    service,
  },
});

export default store;
