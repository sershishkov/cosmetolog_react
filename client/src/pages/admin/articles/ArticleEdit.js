import React, { Fragment, useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getOne__ARTICLE,
  updateOne__ARTICLE,
} from '../../../reduxStore/actions/admin/article';
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
  wrapImg: {
    width: '100%',
    maxWidth: theme.breakpoints.width('sm'),
    // height: 500,
    marginBottom: '2rem',
    // border: '1px solid #f00',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    margin: 'auto',
  },

  editorWrap: {
    // border: '1px solid gray',
    // minHeight: '6rem',
  },
}));

const ArticleEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__ARTICLE = useSelector((state) => state.article);
  const state__KEYWORD = useSelector((state) => state.keyword);
  const history = useHistory();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    keyWords: [],
    header_H1: '',
    header_H2: '',
    header_H3: '',
    header_H4: '',
    imageAlt: '',
  });

  const [newPhoto, setNewPhoto] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const [metaTitle__Helper, set__metaTitle__Helper] = useState('');
  const [metaDescription__Helper, set__metaDescription__Helper] = useState('');
  const [header_H1__Helper, set__header_H1__Helper] = useState('');
  const [header_H2__Helper, set__header_H2__Helper] = useState('');
  const [header_H3__Helper, set__header_H3__Helper] = useState('');
  const [header_H4__Helper, set__header_H4__Helper] = useState('');
  const [imageAlt__Helper, set__imageAlt__Helper] = useState('');

  const {
    metaTitle,
    metaDescription,
    keyWords,
    header_H1,
    header_H2,
    header_H3,
    header_H4,
    imageAlt,
  } = formData;

  const clearFormData = () => {
    setFormData({
      metaTitle: '',
      metaDescription: '',
      keyWords: [],
      header_H1: '',
      header_H2: '',
      header_H3: '',
      header_H4: '',
      imageAlt: '',
    });
    setNewPhoto('');
    setPreviewUrl('');
  };
  useEffect(() => {
    dispatch(setNameOfPage('Редактировать статью'));
    if (id) {
      dispatch(getOne__ARTICLE(id));
    }
    dispatch(getAll__KEYWORD());
  }, [dispatch, id]);

  useLayoutEffect(() => {
    if (state__ARTICLE.one__ARTICLE) {
      const transformedArrOfkeyWords =
        state__ARTICLE.one__ARTICLE.keyWords &&
        state__ARTICLE.one__ARTICLE.keyWords.length > 0
          ? state__ARTICLE.one__ARTICLE.keyWords.map((item) => item._id)
          : [];

      setFormData({
        metaTitle: state__ARTICLE.one__ARTICLE.metaTitle
          ? state__ARTICLE.one__ARTICLE.metaTitle
          : '',
        metaDescription: state__ARTICLE.one__ARTICLE.metaDescription
          ? state__ARTICLE.one__ARTICLE.metaDescription
          : '',
        keyWords: state__ARTICLE.one__ARTICLE.keyWords
          ? transformedArrOfkeyWords
          : [],

        header_H1: state__ARTICLE.one__ARTICLE.header_H1
          ? state__ARTICLE.one__ARTICLE.header_H1
          : '',
        header_H2: state__ARTICLE.one__ARTICLE.header_H1
          ? state__ARTICLE.one__ARTICLE.header_H1
          : '',

        header_H3: state__ARTICLE.one__ARTICLE.header_H3
          ? state__ARTICLE.one__ARTICLE.header_H3
          : '',
        header_H4: state__ARTICLE.one__ARTICLE.header_H4
          ? state__ARTICLE.one__ARTICLE.header_H4
          : '',
        imageAlt: state__ARTICLE.one__ARTICLE.imageAlt
          ? state__ARTICLE.one__ARTICLE.imageAlt
          : '',
      });

      // setPreviewUrl(
      //   state__ARTICLE.one__ARTICLE.imageUrl
      //     ? state__ARTICLE.one__ARTICLE.imageUrl
      //     : ''
      // );
    }
  }, [state__ARTICLE.one__ARTICLE]);
  // console.log(keyWords);
  const onSubmit = () => {
    dispatch(
      updateOne__ARTICLE(
        newPhoto,
        metaTitle,
        metaDescription,
        keyWords,
        header_H1,
        header_H2,
        header_H3,
        header_H4,
        imageAlt,
        id
      )
    );

    clearFormData();
    // history.goBack();
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

      case 'header_H1':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__header_H1__Helper('Минимальная длина 3 знака');
        } else {
          set__header_H1__Helper('');
        }
        break;

      case 'header_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__header_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__header_H2__Helper('');
        }
        break;

      case 'header_H3':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__header_H3__Helper('Минимальная длина 3 знака');
        } else {
          set__header_H3__Helper('');
        }
        break;

      case 'header_H4':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__header_H4__Helper('Минимальная длина 3 знака');
        } else {
          set__header_H4__Helper('');
        }
        break;

      case 'imageAlt':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__imageAlt__Helper('Минимальная длина 3 знака');
        } else {
          set__imageAlt__Helper('');
        }
        break;

      default:
        break;
    }
  };

  const pickedHandler = (e) => {
    const file = e.target.files[0];
    if (file && window.FileReader) {
      setNewPhoto(file);
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
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

      <Grid item className={classes.wrapImg}>
        {previewUrl && (
          <img src={previewUrl} alt='Preview' className={classes.img} />
        )}
        {!previewUrl && (
          <Typography variant='h5' align='center'>
            Пожалуйста выбирите фото
          </Typography>
        )}
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          name='newPhoto'
          accept='image/*'
          type='file'
          id='newPhoto'
          style={{ display: 'none' }}
          onChange={(e) => pickedHandler(e)}
        />
        <label htmlFor='newPhoto'>
          <Button
            variant='contained'
            component='span'
            color='primary'
            fullWidth
            className={classes.button}
          >
            Выбрать новое фото
          </Button>
        </label>
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
      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='header_H1'
          name='header_H1'
          label='header_H1'
          type='text'
          value={header_H1 ? header_H1 : ''}
          error={header_H1__Helper.length !== 0}
          helperText={header_H1__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='header_H2'
          name='header_H2'
          label='header_H2'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={header_H2 ? header_H2 : ''}
          error={header_H2__Helper.length !== 0}
          helperText={header_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='header_H3'
          name='header_H3'
          label='header_H3'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={header_H3 ? header_H3 : ''}
          error={header_H3__Helper.length !== 0}
          helperText={header_H3__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='header_H4'
          name='header_H4'
          label='header_H4'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={header_H4 ? header_H4 : ''}
          error={header_H4__Helper.length !== 0}
          helperText={header_H4__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='imageAlt'
          name='imageAlt'
          label='imageAlt'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={imageAlt ? imageAlt : ''}
          error={imageAlt__Helper.length !== 0}
          helperText={imageAlt__Helper}
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
            !header_H1 ||
            !header_H2 ||
            !header_H3 ||
            !header_H4 ||
            !imageAlt ||
            metaTitle__Helper.length !== 0 ||
            metaDescription__Helper.length !== 0 ||
            header_H1__Helper.length !== 0 ||
            header_H2__Helper.length !== 0 ||
            header_H3__Helper.length !== 0 ||
            header_H4__Helper.length !== 0 ||
            imageAlt__Helper.length !== 0
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

ArticleEdit.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getOne__ARTICLE: PropTypes.func,
  updateOne__ARTICLE: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__ARTICLE: PropTypes.object,
  state__KEYWORD: PropTypes.object,
};

export default ArticleEdit;
