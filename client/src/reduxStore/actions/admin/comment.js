import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { COMMENT__Actions } from '../../reducers/admin/comment';

export const addOne__COMMENT =
  (commentText, reviewBelongs, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      commentText,
      reviewBelongs,
    });

    try {
      const { data } = await axios.post(`/api/admin/comments`, body, config);

      dispatch(COMMENT__Actions.add_one__COMMENT(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__COMMENT());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__COMMENT =
  (commentText, id__COMMENT, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      commentText,
    });

    try {
      const { data } = await axios.put(
        `/api/admin/comments/${id__COMMENT}`,
        body,
        config
      );

      dispatch(COMMENT__Actions.add_one__COMMENT(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__COMMENT());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__COMMENT = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/comments`);

    dispatch(COMMENT__Actions.get_all__COMMENT(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__COMMENT = (id__COMMENT) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/comments/${id__COMMENT}`);

    dispatch(COMMENT__Actions.get_one__COMMENT(data.data));
    dispatch(getAll__COMMENT());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__COMMENT = (id__COMMENT) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/comments/${id__COMMENT}`);

    dispatch(COMMENT__Actions.delete_one__COMMENT(id__COMMENT));
    dispatch(getAll__COMMENT());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
