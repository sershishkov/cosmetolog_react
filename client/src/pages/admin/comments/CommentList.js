import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getAll__COMMENT,
  deleteOne__COMMENT,
} from '../../../reduxStore/actions/admin/comment';
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

const CommentList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__COMMENT = useSelector((state) => state.comment);
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    dispatch(setNameOfPage('Комментарии'));
    dispatch(getAll__COMMENT());
  }, [dispatch]);

  const onDeleteItem = (id) => {
    dispatch(deleteOne__COMMENT(id));
  };

  const rows =
    state__COMMENT.array__COMMENT && state__COMMENT.array__COMMENT.length > 0
      ? state__COMMENT.array__COMMENT.map((item) => {
          return {
            commentText: item.commentText,

            edit: (
              <IconButton component={Link} href={`/admin/comments/${item._id}`}>
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
          title: 'комментарий',
          field: 'commentText',
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
          title: 'Редакт',
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

  if (state__COMMENT.loading__COMMENT) {
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
      <Tooltip title='Добавить комментарий'>
        <Fab
          color='secondary'
          aria-label='add'
          component={Link}
          href={`/admin/comments/add`}
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

CommentList.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getAll__COMMENT: PropTypes.func,
  deleteOne__COMMENT: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
};

export default CommentList;
