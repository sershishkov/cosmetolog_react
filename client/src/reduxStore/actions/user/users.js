import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { USER__Actions } from '../../reducers/user/users';

export const addOne__USER =
  (name, email, role, password, history) => async (dispatch) => {
    const new__USER = {
      name,
      email,
      role,
      password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(`/api/admin/users`, new__USER, config);

      dispatch(USER__Actions.add_one__USER(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__USER());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__USER =
  (name, email, role, password, id__USER, history) => async (dispatch) => {
    const new__USER = {
      name,
      email,
      role,
      password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.put(
        `/api/admin/users/${id__USER}`,
        new__USER,
        config
      );

      dispatch(USER__Actions.add_one__USER(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__USER());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__USER = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/users`);

    dispatch(USER__Actions.get_all__USER(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__USER = (id__USER) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/users/${id__USER}`);

    dispatch(USER__Actions.get_one__USER(data.data));
    dispatch(getAll__USER());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__USER = (id__USER) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/users/${id__USER}`);

    dispatch(USER__Actions.delete_one__USER(id__USER));
    dispatch(setAlert('Удалено успешно', 'success', 2500));
    dispatch(getAll__USER());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
