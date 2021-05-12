import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getAll__ARTICLE,
  deleteOne__ARTICLE,
} from '../../../reduxStore/actions/admin/article';
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

const ArticleList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__ARTICLE = useSelector((state) => state.article);
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    dispatch(setNameOfPage('Вопросы и ответы'));
    dispatch(getAll__ARTICLE());
  }, [dispatch]);

  const onDeleteItem = (id) => {
    dispatch(deleteOne__ARTICLE(id));
  };

  const rows =
    state__ARTICLE.array__ARTICLE && state__ARTICLE.array__ARTICLE.length > 0
      ? state__ARTICLE.array__ARTICLE.map((item) => {
          return {
            photoWork: (
              <img
                src={`${item.imageUrl}`}
                alt={item.imageAlt}
                className={classes.img}
              />
            ),
            metaTitle: item.metaTitle,

            edit: (
              <IconButton component={Link} href={`/admin/articles/${item._id}`}>
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
          title: 'metaTitle',
          field: 'metaTitle',
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

  if (state__ARTICLE.loading__ARTICLE) {
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
      <Tooltip title='Добавить вопрос'>
        <Fab
          color='secondary'
          aria-label='add'
          component={Link}
          href={`/admin/articles/add`}
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

ArticleList.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getAll__ARTICLE: PropTypes.func,
  deleteOne__ARTICLE: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__ARTICLE: PropTypes.object,
};

export default ArticleList;
