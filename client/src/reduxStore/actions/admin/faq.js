import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { FAQ__Actions } from '../../reducers/admin/faq';

export const addOne__FAQ = (
  metaTitle,
  metaDescription,
  keyWords,
  questionText,
  answerText
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    metaTitle,
    metaDescription,
    keyWords,
    questionText,
    answerText,
  });

  try {
    const { data } = await axios.post(`/api/admin/faqs`, body, config);

    dispatch(FAQ__Actions.add_one__FAQ(data.data));

    dispatch(getAll__FAQ());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const updateOne__FAQ = (
  metaTitle,
  metaDescription,
  keyWords,
  questionText,
  answerText,
  id__FAQ
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    metaTitle,
    metaDescription,
    keyWords,
    questionText,
    answerText,
  });

  try {
    const { data } = await axios.put(
      `/api/admin/faqs/${id__FAQ}`,
      body,
      config
    );

    dispatch(FAQ__Actions.add_one__FAQ(data.data));

    dispatch(getAll__FAQ());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getAll__FAQ = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/faqs`);

    dispatch(FAQ__Actions.get_all__FAQ(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__FAQ = (id__FAQ) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/faqs/${id__FAQ}`);

    dispatch(FAQ__Actions.get_one__FAQ(data.data));
    dispatch(getAll__FAQ());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__FAQ = (id__FAQ) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/faqs/${id__FAQ}`);

    dispatch(FAQ__Actions.delete_one__FAQ(id__FAQ));
    dispatch(getAll__FAQ());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
