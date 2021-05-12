import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { ARTICLE__Actions } from '../../reducers/admin/article';

export const addOne__ARTICLE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
    history
  ) =>
  async (dispatch) => {
    const photoFormData = new FormData();
    photoFormData.append('photoWork', file);
    photoFormData.append('metaTitle', metaTitle);
    photoFormData.append('metaDescription', metaDescription);
    photoFormData.append('keyWords', keyWords);
    photoFormData.append('header_H1', header_H1);
    photoFormData.append('header_H2', header_H2);
    photoFormData.append('header_H3', header_H3);
    photoFormData.append('header_H4', header_H4);
    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        `/api/admin/articles`,
        photoFormData,
        config
      );

      dispatch(ARTICLE__Actions.add_one__ARTICLE(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__ARTICLE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__ARTICLE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
    id__ARTICLE,
    history
  ) =>
  async (dispatch) => {
    // console.log(
    //   file,
    //   metaTitle,
    //   metaDescription,
    //   keyWords,
    //   header_H1,
    //   header_H2,
    //   header_H3,
    //   header_H4,
    //   imageAlt,
    //   id__ARTICLE
    // );
    const photoFormData = new FormData();
    photoFormData.append('photoWork', file);
    photoFormData.append('metaTitle', metaTitle);
    photoFormData.append('metaDescription', metaDescription);
    photoFormData.append('keyWords', keyWords);
    photoFormData.append('header_H1', header_H1);
    photoFormData.append('header_H2', header_H2);
    photoFormData.append('header_H3', header_H3);
    photoFormData.append('header_H4', header_H4);
    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    try {
      const { data } = await axios.put(
        `/api/admin/articles/${id__ARTICLE}`,
        photoFormData,
        config
      );

      dispatch(ARTICLE__Actions.add_one__ARTICLE(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__ARTICLE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__ARTICLE = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/articles`);

    dispatch(ARTICLE__Actions.get_all__ARTICLE(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__ARTICLE = (id__ARTICLE) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/articles/${id__ARTICLE}`);

    dispatch(ARTICLE__Actions.get_one__ARTICLE(data.data));
    dispatch(getAll__ARTICLE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__ARTICLE = (id__ARTICLE) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/articles/${id__ARTICLE}`);

    dispatch(ARTICLE__Actions.delete_one__ARTICLE(id__ARTICLE));
    dispatch(setAlert('Удалено успешно', 'success', 2500));
    dispatch(getAll__ARTICLE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
