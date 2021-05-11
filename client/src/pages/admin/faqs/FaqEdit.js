import React, { Fragment, useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getOne__FAQ,
  updateOne__FAQ,
} from '../../../reduxStore/actions/admin/faq';
import { getAll__KEYWORD } from '../../../reduxStore/actions/admin/keyword';

import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width('sm'),
    width: '100%',
    margin: 'auto',
  },
  item: {
    marginBottom: '2rem',
  },

  editorWrap: {
    // border: '1px solid gray',
    // minHeight: '6rem',
  },
}));

const FAQ__Edit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__FAQ = useSelector((state) => state.faq);
  const state__KEYWORD = useSelector((state) => state.keyword);
  const history = useHistory();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    keyWords: [],
    questionText: '',
    answerText: '',
  });

  const [metaTitle__Helper, set__metaTitle__Helper] = useState('');
  const [metaDescription__Helper, set__metaDescription__Helper] = useState('');
  const [questionText__Helper, set__questionText__Helper] = useState('');
  const [answerText__Helper, set__answerText__Helper] = useState('');

  const { metaTitle, metaDescription, keyWords, questionText, answerText } =
    formData;

  const clearFormData = () => {
    setFormData({
      metaTitle: '',
      metaDescription: '',
      keyWords: [],
      questionText: '',
      answerText: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Редактировать вопрос'));
    if (id) {
      dispatch(getOne__FAQ(id));
    }
    dispatch(getAll__KEYWORD());
  }, [dispatch, id]);

  useLayoutEffect(() => {
    if (state__FAQ.one__FAQ) {
      const transformedArrOfkeyWords =
        state__FAQ.one__FAQ.keyWords && state__FAQ.one__FAQ.keyWords.length > 0
          ? state__FAQ.one__FAQ.keyWords.map((item) => item._id)
          : [];
      setFormData({
        metaTitle: state__FAQ.one__FAQ.metaTitle
          ? state__FAQ.one__FAQ.metaTitle
          : '',
        metaDescription: state__FAQ.one__FAQ.metaDescription
          ? state__FAQ.one__FAQ.metaDescription
          : '',
        keyWords: state__FAQ.one__FAQ.keyWords ? transformedArrOfkeyWords : [],
        questionText: state__FAQ.one__FAQ.questionText
          ? state__FAQ.one__FAQ.questionText
          : '',
        answerText: state__FAQ.one__FAQ.answerText
          ? state__FAQ.one__FAQ.answerText
          : '',
      });
    }
  }, [state__FAQ.one__FAQ]);
  // console.log(keyWords);
  const onSubmit = () => {
    dispatch(
      updateOne__FAQ(
        metaTitle,
        metaDescription,
        keyWords,
        questionText,
        answerText,
        id
      )
    );

    clearFormData();
    history.goBack();
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'metaTitle':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__metaTitle__Helper('Минимальная длина 3 знака');
        } else {
          set__metaTitle__Helper('');
        }
        break;

      case 'metaDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__metaDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__metaDescription__Helper('');
        }
        break;

      case 'questionText':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__questionText__Helper('Минимальная длина 3 знака');
        } else {
          set__questionText__Helper('');
        }
        break;

      case 'answerText':
        valid = event.target.value.length >= 10;
        if (!valid) {
          set__answerText__Helper('Минимальная длина 10 знака');
        } else {
          set__answerText__Helper('');
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
          id='metaTitle'
          name='metaTitle'
          label='meta Title'
          type='text'
          value={metaTitle ? metaTitle : ''}
          error={metaTitle__Helper.length !== 0}
          helperText={metaTitle__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='metaDescription'
          name='metaDescription'
          label='meta Description'
          type='text'
          value={metaDescription ? metaDescription : ''}
          error={metaDescription__Helper.length !== 0}
          helperText={metaDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='questionText'
          name='questionText'
          label='questionText'
          type='text'
          value={questionText ? questionText : ''}
          error={questionText__Helper.length !== 0}
          helperText={questionText__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} ${classes.wrapSelect}`}>
        <InputLabel id='keyWords-label'>Ключевые слова</InputLabel>
        <Select
          labelId='keyWords-label'
          id='keyWords'
          name='keyWords'
          multiple
          required
          fullWidth
          value={keyWords ? keyWords : []}
          onChange={(e) => onChangeHandler(e)}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected &&
                selected.length > 0 &&
                state__KEYWORD.array__KEYWORD &&
                state__KEYWORD.array__KEYWORD.length > 0 &&
                selected.map((value) => {
                  const textToDispaly = state__KEYWORD.array__KEYWORD.find(
                    (item) => item._id === value
                  ).keyWord_text;

                  return (
                    <Fragment key={value}>
                      <Chip label={textToDispaly} className={classes.chip} />
                    </Fragment>
                  );
                })}
            </div>
          )}
          // renderValue={(selected) => selected.join(', ')}
          className={classes.select}
        >
          {state__KEYWORD.array__KEYWORD &&
            state__KEYWORD.array__KEYWORD.length > 0 &&
            state__KEYWORD.array__KEYWORD.map((item) => (
              <MenuItem
                key={item._id}
                value={item._id}
                className={classes.selectItem}
              >
                <Checkbox
                  checked={keyWords && keyWords.indexOf(item._id) > -1}
                />
                {item.keyWord_text}
              </MenuItem>
            ))}
        </Select>
      </Grid>
      <Grid item className={`${classes.item} ${classes.editorWrap}`}>
        <TextField
          // autoFocus
          id='answerText'
          name='answerText'
          label='answerText'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={answerText ? answerText : ''}
          error={answerText__Helper.length !== 0}
          helperText={answerText__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <Button
          disabled={
            !metaTitle ||
            !metaDescription ||
            (keyWords && keyWords.length === 0) ||
            !questionText ||
            !answerText ||
            !answerText ||
            metaTitle__Helper.length !== 0 ||
            metaDescription__Helper.length !== 0 ||
            questionText__Helper.length !== 0 ||
            answerText__Helper.length !== 0
          }
          fullWidth
          variant='contained'
          onClick={() => onSubmit()}
          color='primary'
        >
          Редактировать
        </Button>
      </Grid>
    </Grid>
  );
};

FAQ__Edit.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  addOne__FAQ: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
};

export default FAQ__Edit;
