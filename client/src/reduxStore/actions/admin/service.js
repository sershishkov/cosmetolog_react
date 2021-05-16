import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { SERVICE__Actions } from '../../reducers/admin/service';

export const addOne__SERVICE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

    imageAlt,
    history
  ) =>
  async (dispatch) => {
    const photoFormData = new FormData();
    photoFormData.append('photoWork', file);
    photoFormData.append('metaTitle', metaTitle);
    photoFormData.append('metaDescription', metaDescription);
    photoFormData.append('keyWords', keyWords);
    photoFormData.append('procedures', procedures);
    photoFormData.append('header_H1', header_H1);

    photoFormData.append('advantageHeader_H2', advantageHeader_H2);
    photoFormData.append('advantageDescription', advantageDescription);
    photoFormData.append('timing_H2', timing_H2);
    photoFormData.append('timingDescription', timingDescription);
    photoFormData.append('preparationHeader_H2', preparationHeader_H2);
    photoFormData.append('preparationDescription', preparationDescription);
    photoFormData.append(
      'recoveryAfterServiceHeader_H2',
      recoveryAfterServiceHeader_H2
    );
    photoFormData.append(
      'recoveryAfterServiceDescription',
      recoveryAfterServiceDescription
    );
    photoFormData.append('resultHeader_H2', resultHeader_H2);
    photoFormData.append('resultDescription', resultDescription);
    photoFormData.append('priceHeader_H2', priceHeader_H2);
    photoFormData.append('priceDescription', priceDescription);

    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await axios.post(
        `/api/admin/services`,
        photoFormData,
        config
      );

      dispatch(SERVICE__Actions.add_one__SERVICE(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__SERVICE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__SERVICE =
  (
    file,
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

    imageAlt,
    id__SERVICE,
    history
  ) =>
  async (dispatch) => {
    const photoFormData = new FormData();
    photoFormData.append('photoWork', file);
    photoFormData.append('metaTitle', metaTitle);
    photoFormData.append('metaDescription', metaDescription);
    photoFormData.append('keyWords', keyWords);
    photoFormData.append('procedures', procedures);
    photoFormData.append('header_H1', header_H1);

    photoFormData.append('advantageHeader_H2', advantageHeader_H2);
    photoFormData.append('advantageDescription', advantageDescription);
    photoFormData.append('timing_H2', timing_H2);
    photoFormData.append('timingDescription', timingDescription);
    photoFormData.append('preparationHeader_H2', preparationHeader_H2);
    photoFormData.append('preparationDescription', preparationDescription);
    photoFormData.append(
      'recoveryAfterServiceHeader_H2',
      recoveryAfterServiceHeader_H2
    );
    photoFormData.append(
      'recoveryAfterServiceDescription',
      recoveryAfterServiceDescription
    );
    photoFormData.append('resultHeader_H2', resultHeader_H2);
    photoFormData.append('resultDescription', resultDescription);
    photoFormData.append('priceHeader_H2', priceHeader_H2);
    photoFormData.append('priceDescription', priceDescription);

    photoFormData.append('imageAlt', imageAlt);

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await axios.put(
        `/api/admin/services/${id__SERVICE}`,
        photoFormData,
        config
      );

      dispatch(SERVICE__Actions.add_one__SERVICE(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__SERVICE());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__SERVICE = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/services`);

    dispatch(SERVICE__Actions.get_all__SERVICE(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__SERVICE = (id__SERVICE) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/services/${id__SERVICE}`);

    dispatch(SERVICE__Actions.get_one__SERVICE(data.data));
    dispatch(getAll__SERVICE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__SERVICE = (id__SERVICE) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/services/${id__SERVICE}`);

    dispatch(SERVICE__Actions.delete_one__SERVICE(id__SERVICE));
    dispatch(setAlert('Удалено успешно', 'success', 2500));
    dispatch(getAll__SERVICE());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
