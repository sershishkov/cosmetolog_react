import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getAll__SERVICE,
  deleteOne__SERVICE,
} from '../../../reduxStore/actions/admin/service';
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
  img: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
}));

const ServiceList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__SERVICE = useSelector((state) => state.service);
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    dispatch(setNameOfPage('Услуги'));
    dispatch(getAll__SERVICE());
  }, [dispatch]);

  const onDeleteItem = (id) => {
    dispatch(deleteOne__SERVICE(id));
  };

  const rows =
    state__SERVICE.array__SERVICE && state__SERVICE.array__SERVICE.length > 0
      ? state__SERVICE.array__SERVICE.map((item) => {
          return {
            photoWork: (
              <img
                src={`${item.imageUrl}`}
                alt={item.imageAlt}
                className={classes.img}
              />
            ),
            header_H1: item.header_H1,

            edit: (
              <IconButton component={Link} href={`/admin/SERVICEs/${item._id}`}>
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
          title: 'Фото',
          field: 'photoWork',
          cellStyle: {
            width: '30%',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ff0000',
          },

          headerStyle: {
            width: '30%',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ffff00',
          },
        },
        {
          title: 'header_H1',
          field: 'header_H1',
          cellStyle: {
            width: '300px',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ff0000',
            display: '-webkit-box',
            WebkitLineClamp: 5 /* количество строк */,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },

          headerStyle: {
            width: '300px',
            // textAlign: 'center',
            fontSize: '2rem',
            // border: '1px solid #ffff00',
          },
        },

        {
          title: 'edit',
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
          title: 'del',
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

  if (state__SERVICE.loading__SERVICE) {
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
      <Tooltip title='Добавить услугу'>
        <Fab
          color='secondary'
          aria-label='add'
          component={Link}
          href={`/admin/services/add`}
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

ServiceList.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getAll__SERVICE: PropTypes.func,
  deleteOne__SERVICE: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__SERVICE: PropTypes.object,
};

export default ServiceList;
