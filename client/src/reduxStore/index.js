import { configureStore } from '@reduxjs/toolkit';

import nameOfPage from './reducers/nameOfPage';
import alerts from './reducers/alert';
import auth from './reducers/user/auth';

import keyword from './reducers/admin/keyword';
import faq from './reducers/admin/faq';

const store = configureStore({
  reducer: {
    auth,
    nameOfPage,
    alerts,

    keyword,
    faq,
  },
});

export default store;
