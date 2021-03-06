import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import { addOne__COMMENT } from '../../../reduxStore/actions/admin/comment';

import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width('sm'),
    width: '100%',
    margin: 'auto',
  },
}));

const CommentAdd = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const history = useHistory();
  const { review__id } = useParams();

  const [formData, setFormData] = useState({
    commentText: '',
  });
  const [COMMENT_text__Helper, set__COMMENT_text__Helper] = useState('');

  const { commentText } = formData;

  const clearFormData = () => {
    setFormData({
      commentText: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Добавить комментарий'));
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(addOne__COMMENT(commentText, review__id, history));

    clearFormData();
    // history.goBack();
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'commentText':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__COMMENT_text__Helper('Минимальная длина 3 знака');
        } else {
          set__COMMENT_text__Helper('');
        }
        break;

      default:
        break;
    }
  };

  return (
    <Grid container className={classes.root} direction='column'>
      <Tooltip title='Назад'>
        <Fab
          color='secondary'
          aria-label='go Back'
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </Fab>
      </Tooltip>

      <Grid item className={classes.item}>
        <Typography variant='h3' align='center'>
          {state__nameOfPage && state__nameOfPage}
        </Typography>
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          autoFocus
          id='commentText'
          name='commentText'
          label='Ключевое слово'
          type='text'
          value={commentText ? commentText : ''}
          error={COMMENT_text__Helper.length !== 0}
          helperText={COMMENT_text__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <Button
          disabled={!commentText || COMMENT_text__Helper.length !== 0}
          fullWidth
          variant='contained'
          onClick={() => onSubmit()}
          color='primary'
        >
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
};

CommentAdd.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  addOne__COMMENT: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
};

export default CommentAdd;
