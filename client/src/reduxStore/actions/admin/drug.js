import axios from 'axios';

import { setAlert } from '../../actions/alert';

import { DRUG__Actions } from '../../reducers/admin/drug';

export const addOne__DRUG =
  (drugName, drugDescription, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      drugName,
      drugDescription,
    });

    try {
      const { data } = await axios.post(`/api/admin/drugs`, body, config);

      dispatch(DRUG__Actions.add_one__DRUG(data.data));
      dispatch(setAlert('Добавлено успешно', 'success', 2500));
      dispatch(getAll__DRUG());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const updateOne__DRUG =
  (drugName, drugDescription, id__DRUG, history) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      drugName,
      drugDescription,
    });

    try {
      const { data } = await axios.put(
        `/api/admin/drugs/${id__DRUG}`,
        body,
        config
      );

      dispatch(DRUG__Actions.add_one__DRUG(data.data));
      dispatch(setAlert('Обновлено успешно', 'success', 2500));
      dispatch(getAll__DRUG());
      history.goBack();
    } catch (err) {
      const error = err.response.data.error;
      if (error) {
        dispatch(setAlert(error, 'error', 2500));
      }
    }
  };

export const getAll__DRUG = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/drugs`);

    dispatch(DRUG__Actions.get_all__DRUG(data.data));
  } catch (err) {
    const error = err.response.data.error;
    console.log(err);
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const getOne__DRUG = (id__DRUG) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admin/drugs/${id__DRUG}`);

    dispatch(DRUG__Actions.get_one__DRUG(data.data));
    dispatch(getAll__DRUG());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};

export const deleteOne__DRUG = (id__DRUG) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/drugs/${id__DRUG}`);

    dispatch(DRUG__Actions.delete_one__DRUG(id__DRUG));
    dispatch(getAll__DRUG());
  } catch (err) {
    const error = err.response.data.error;
    if (error) {
      dispatch(setAlert(error, 'error', 2500));
    }
  }
};
