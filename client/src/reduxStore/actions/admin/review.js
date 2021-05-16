import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { REVIEW__Actions } from '../../reducers/admin/review';

export const addOne__REVIEW =
  (reviewText, serviceBelongs, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      reviewText,
      serviceBelongs,
    });

    try {
      const { data } = await axios.post(`/api/admin/reviews`, body, config);

      dispatch(REVIEW__Actions.add_one__REVIEW(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__REVIEW());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__REVIEW =
  (reviewText, id__REVIEW, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      reviewText,
    });

    try {
      const { data } = await axios.put(
        `/api/admin/reviews/${id__REVIEW}`,
        body,
        config
      );

      dispatch(REVIEW__Actions.add_one__REVIEW(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__REVIEW());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__REVIEW = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/reviews`);

    dispatch(REVIEW__Actions.get_all__REVIEW(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__REVIEW = (id__REVIEW) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/reviews/${id__REVIEW}`);

    dispatch(REVIEW__Actions.get_one__REVIEW(data.data));
    dispatch(getAll__REVIEW());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__REVIEW = (id__REVIEW) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/reviews/${id__REVIEW}`);

    dispatch(REVIEW__Actions.delete_one__REVIEW(id__REVIEW));
    dispatch(getAll__REVIEW());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
