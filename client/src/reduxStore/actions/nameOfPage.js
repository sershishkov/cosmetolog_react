import { nameOfPage__Actions } from '../reducers/nameOfPage';

export const setNameOfPage = (pageName) => (dispatch) => {
  dispatch(nameOfPage__Actions.setPage({ pageName }));
};
