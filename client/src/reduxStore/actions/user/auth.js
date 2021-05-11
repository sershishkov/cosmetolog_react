import axios from 'axios';

import setAuthToken from '../../../utils/setAuthToken';
import { setAlert } from '../alert';
import { USER_AUTH__Actions } from '../../reducers/user/auth';

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get('/api/auth/me');
    // console.log(data.user);

    dispatch(USER_AUTH__Actions.getMe(data.user));
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};

//Register user
export const register = (name, email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const { data } = await axios.post('/api/auth/register', body, config);
    // console.log(data);

    dispatch(USER_AUTH__Actions.login(data));

    dispatch(loadUser());
    dispatch(setAlert('Регистрация прошла успешно', 'success'));
  } catch (err) {
    const error = err.response.data.error;

    if (error === 'Duplicate field value entered') {
      dispatch(setAlert('Такой пользователь уже зарегистрирован', 'error'));
    } else if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};

//Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const { data } = await axios.post('/api/auth/login', body, config);
    // console.log(data);
    dispatch(USER_AUTH__Actions.login(data));
    dispatch(loadUser());
    dispatch(setAlert('Вход успешый', 'success'));
  } catch (err) {
    const error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};

//LOGout
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/auth/logout');
    dispatch(USER_AUTH__Actions.logout());
    dispatch(setAlert('Выход успешый', 'success'));
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};

//Update user details
export const updateDetails = (name, email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email });

  try {
    await axios.put('/api/auth/updatedetails', body, config);
    dispatch(USER_AUTH__Actions.logout());
    dispatch(setAlert('Обновление данных успешо', 'success'));
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};

//Update user password
export const updatePassword = (currentPassword, newPassword) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ currentPassword, newPassword });

  try {
    await axios.put('/api/auth/updatepassword', body, config);
    dispatch(USER_AUTH__Actions.logout());
    dispatch(setAlert('Пароль обнавлен успешо', 'success'));
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error'));
    }
  }
};
