import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { PROCEDURE__Actions } from '../../reducers/admin/procedure';

export const addOne__PROCEDURE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    drugs,
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
    photoFormData.append('drugs', drugs);
    photoFormData.append('header_H1', header_H1);
    photoFormData.append('header_H2', header_H2);
    photoFormData.append('header_H3', header_H3);
    photoFormData.append('header_H4', header_H4);
    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await axios.post(
        `/api/admin/procedures`,
        photoFormData,
        config
      );

      console.log(data.data);

      dispatch(PROCEDURE__Actions.add_one__PROCEDURE(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__PROCEDURE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__PROCEDURE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    drugs,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
    id__PROCEDURE,
    history
  ) =>
  async (dispatch) => {
    const photoFormData = new FormData();
    photoFormData.append('photoWork', file);
    photoFormData.append('metaTitle', metaTitle);
    photoFormData.append('metaDescription', metaDescription);
    photoFormData.append('keyWords', keyWords);
    photoFormData.append('drugs', drugs);
    photoFormData.append('header_H1', header_H1);
    photoFormData.append('header_H2', header_H2);
    photoFormData.append('header_H3', header_H3);
    photoFormData.append('header_H4', header_H4);
    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await axios.put(
        `/api/admin/procedures/${id__PROCEDURE}`,
        photoFormData,
        config
      );

      dispatch(PROCEDURE__Actions.add_one__PROCEDURE(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__PROCEDURE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__PROCEDURE = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/procedures`);

    dispatch(PROCEDURE__Actions.get_all__PROCEDURE(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__PROCEDURE = (id__PROCEDURE) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/procedures/${id__PROCEDURE}`);

    dispatch(PROCEDURE__Actions.get_one__PROCEDURE(data.data));
    dispatch(getAll__PROCEDURE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__PROCEDURE = (id__PROCEDURE) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/procedures/${id__PROCEDURE}`);

    dispatch(PROCEDURE__Actions.delete_one__PROCEDURE(id__PROCEDURE));
    dispatch(setAlert('Удалено успешно', 'success', 2500));
    dispatch(getAll__PROCEDURE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
