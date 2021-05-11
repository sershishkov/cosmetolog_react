import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getAll__KEYWORD,
  deleteOne__KEYWORD,
} from '../../../reduxStore/actions/admin/keyword';
import MaterialTable from '../../../components/helpers/MaterialTable';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width('sm'),
    width: '100%',
    margin: 'auto',
  },
}));

const KeywordList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__KEYWORD = useSelector((state) => state.keyword);
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    dispatch(setNameOfPage('Ключевые слова'));
    dispatch(getAll__KEYWORD());
  }, [dispatch]);

  const onDeleteItem = (id) => {
    dispatch(deleteOne__KEYWORD(id));
  };

  const rows =
    state__KEYWORD.array__KEYWORD && state__KEYWORD.array__KEYWORD.length > 0
      ? state__KEYWORD.array__KEYWORD.map((item) => {
          return {
            keyWord_text: item.keyWord_text,

            edit: (
              <IconButton component={Link} href={`/admin/keywords/${item._id}`}>
                <EditIcon color='primary' />
              </IconButton>
            ),
            delete: (
              <IconButton onClick={() => onDeleteItem(item._id)}>
                <DeleteForeverIcon color='error' />
              </IconButton>
            ),
          };
        })
      : [];

  const myMaterialTable = (
    <MaterialTable
      title={state__nameOfPage && state__nameOfPage}
      columns={[
        {
          title: 'Ключевое слово',
          field: 'keyWord_text',
          cellStyle: {
            // width: '10%',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ff0000',
          },

          headerStyle: {
            // width: '10%',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ffff00',
          },
        },

        {
          title: 'Редактировать',
          field: 'edit',
          sorting: false,
          filtering: false,
          cellStyle: {
            width: '10%',
            textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ff0000',
          },

          headerStyle: {
            width: '10%',
            textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ffff00',
          },
        },
        {
          title: 'Удалить',
          field: 'delete',
          sorting: false,
          filtering: false,
          cellStyle: {
            width: '10%',
            textAlign: 'center',
            // border: '1px solid #ff0000',
          },

          headerStyle: {
            width: '10%',
            textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ffff00',
          },
        },
      ]}
      data={rows}
    />
  );

  if (state__KEYWORD.loading__KEYWORD) {
    return (
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.spinnerContainer}
      >
        <Grid item className={classes.spinnerItem}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container className={classes.root} direction='column'>
      <Tooltip title='Добавить ключевое слово'>
        <Fab
          color='secondary'
          aria-label='add'
          component={Link}
          href={`/admin/keywords/add`}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Grid item className={classes.item}>
        <Typography variant='h3' align='center'>
          {state__nameOfPage && state__nameOfPage}
        </Typography>
      </Grid>

      <Grid item className={classes.item}>
        {myMaterialTable}
      </Grid>
    </Grid>
  );
};

KeywordList.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getAll__KEYWORD: PropTypes.func,
  deleteOne__KEYWORD: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
};

export default KeywordList;
