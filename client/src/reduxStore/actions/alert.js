import { v4 as uuidv4 } from 'uuid';
import { alert__Actions } from '../reducers/alert';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  dispatch(alert__Actions.setAlert({ msg, alertType, id }));

  setTimeout(() => dispatch(alert__Actions.removeAlert({ id })), timeout);
};
