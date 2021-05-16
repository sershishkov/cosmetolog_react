import React, { Fragment, useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getOne__PROCEDURE,
  updateOne__PROCEDURE,
} from '../../../reduxStore/actions/admin/procedure';
import { getAll__KEYWORD } from '../../../reduxStore/actions/admin/keyword';
import { getAll__DRUG } from '../../../reduxStore/actions/admin/drug';

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

const ProcedureEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__PROCEDURE = useSelector((state) => state.procedure);
  const state__KEYWORD = useSelector((state) => state.keyword);
  const state__DRUG = useSelector((state) => state.drug);
  const history = useHistory();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    keyWords: [],
    drugs: [],
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
    drugs,
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
      drugs: [],
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
    dispatch(setNameOfPage('Редактировать процедуру'));
    if (id) {
      dispatch(getOne__PROCEDURE(id));
    }
    dispatch(getAll__KEYWORD());
    dispatch(getAll__DRUG());
  }, [dispatch, id]);

  useLayoutEffect(() => {
    if (state__PROCEDURE.one__PROCEDURE) {
      const transformedArrOfkeyWords =
        state__PROCEDURE.one__PROCEDURE.keyWords &&
        state__PROCEDURE.one__PROCEDURE.keyWords.length > 0
          ? state__PROCEDURE.one__PROCEDURE.keyWords.map((item) => item._id)
          : [];

      const transformedArrOfDrugs =
        state__PROCEDURE.one__PROCEDURE.drugs &&
        state__PROCEDURE.one__PROCEDURE.drugs.length > 0
          ? state__PROCEDURE.one__PROCEDURE.drugs.map((item) => item._id)
          : [];

      setFormData({
        metaTitle: state__PROCEDURE.one__PROCEDURE.metaTitle
          ? state__PROCEDURE.one__PROCEDURE.metaTitle
          : '',
        metaDescription: state__PROCEDURE.one__PROCEDURE.metaDescription
          ? state__PROCEDURE.one__PROCEDURE.metaDescription
          : '',
        keyWords: state__PROCEDURE.one__PROCEDURE.keyWords
          ? transformedArrOfkeyWords
          : [],
        drugs: state__PROCEDURE.one__PROCEDURE.drugs
          ? transformedArrOfDrugs
          : [],

        header_H1: state__PROCEDURE.one__PROCEDURE.header_H1
          ? state__PROCEDURE.one__PROCEDURE.header_H1
          : '',
        header_H2: state__PROCEDURE.one__PROCEDURE.header_H1
          ? state__PROCEDURE.one__PROCEDURE.header_H1
          : '',

        header_H3: state__PROCEDURE.one__PROCEDURE.header_H3
          ? state__PROCEDURE.one__PROCEDURE.header_H3
          : '',
        header_H4: state__PROCEDURE.one__PROCEDURE.header_H4
          ? state__PROCEDURE.one__PROCEDURE.header_H4
          : '',
        imageAlt: state__PROCEDURE.one__PROCEDURE.imageAlt
          ? state__PROCEDURE.one__PROCEDURE.imageAlt
          : '',
      });

      setPreviewUrl(
        state__PROCEDURE.one__PROCEDURE.imageUrl
          ? state__PROCEDURE.one__PROCEDURE.imageUrl
          : ''
      );
    }
  }, [state__PROCEDURE.one__PROCEDURE]);
  // console.log(keyWords);
  const onSubmit = () => {
    dispatch(
      updateOne__PROCEDURE(
        newPhoto,
        metaTitle,
        metaDescription,
        keyWords,
        drugs,
        header_H1,
        header_H2,
        header_H3,
        header_H4,
        imageAlt,
        id,
        history
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

      <Grid item className={`${classes.item} ${classes.wrapSelect}`}>
        <InputLabel id='drugs-label'>Ключевые слова</InputLabel>
        <Select
          labelId='drugs-label'
          id='drugs'
          name='drugs'
          multiple
          required
          fullWidth
          value={drugs ? drugs : []}
          onChange={(e) => onChangeHandler(e)}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected &&
                selected.length > 0 &&
                state__DRUG.array__DRUG &&
                state__DRUG.array__DRUG.length > 0 &&
                selected.map((value) => {
                  const textToDispaly = state__DRUG.array__DRUG.find(
                    (item) => item._id === value
                  ).drugName;

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
          {state__DRUG.array__DRUG &&
            state__DRUG.array__DRUG.length > 0 &&
            state__DRUG.array__DRUG.map((item) => (
              <MenuItem
                key={item._id}
                value={item._id}
                className={classes.selectItem}
              >
                <Checkbox checked={drugs && drugs.indexOf(item._id) > -1} />
                {item.drugName}
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
          // placeholder='Ответ на вопрос'
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
          // placeholder='Ответ на вопрос'
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
          // placeholder='Ответ на вопрос'
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
          // placeholder='Ответ на вопрос'
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
            (drugs && drugs.length === 0) ||
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

ProcedureEdit.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getOne__PROCEDURE: PropTypes.func,
  updateOne__PROCEDURE: PropTypes.func,
  getAll__KEYWORD: PropTypes.func,
  getAll__DRUG: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__PROCEDURE: PropTypes.object,
  state__KEYWORD: PropTypes.object,
  state__DRUG: PropTypes.object,
};

export default ProcedureEdit;
