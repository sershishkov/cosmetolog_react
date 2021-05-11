import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { KEYWORD__Actions } from '../../reducers/admin/keyword';

export const addOne__KEYWORD = (keyWord_text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    keyWord_text,
  });

  try {
    const { data } = await axios.post(`/api/admin/keywords`, body, config);

    dispatch(KEYWORD__Actions.add_one__KEYWORD(data.data));

    dispatch(getAll__KEYWORD());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const updateOne__KEYWORD = (keyWord_text, id__KEYWORD) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    keyWord_text,
  });

  try {
    const { data } = await axios.put(
      `/api/admin/keywords/${id__KEYWORD}`,
      body,
      config
    );

    dispatch(KEYWORD__Actions.add_one__KEYWORD(data.data));

    dispatch(getAll__KEYWORD());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getAll__KEYWORD = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/keywords`);

    dispatch(KEYWORD__Actions.get_all__KEYWORD(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__KEYWORD = (id__KEYWORD) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/keywords/${id__KEYWORD}`);

    dispatch(KEYWORD__Actions.get_one__KEYWORD(data.data));
    dispatch(getAll__KEYWORD());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__KEYWORD = (id__KEYWORD) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/keywords/${id__KEYWORD}`);

    dispatch(KEYWORD__Actions.delete_one__KEYWORD(id__KEYWORD));
    dispatch(getAll__KEYWORD());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
