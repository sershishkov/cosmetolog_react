import React, { Fragment, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import { addOne__SERVICE } from '../../../reduxStore/actions/admin/service';
import { getAll__KEYWORD } from '../../../reduxStore/actions/admin/keyword';
import { getAll__PROCEDURE } from '../../../reduxStore/actions/admin/procedure';

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

const ServiceAdd = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__KEYWORD = useSelector((state) => state.keyword);
  const state__PROCEDURE = useSelector((state) => state.procedure);
  const history = useHistory();

  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    keyWords: [],
    procedures: [],
    header_H1: '',

    advantageHeader_H2: '',
    advantageDescription: '',
    timing_H2: '',
    timingDescription: '',
    preparationHeader_H2: '',
    preparationDescription: '',
    recoveryAfterServiceHeader_H2: '',
    recoveryAfterServiceDescription: '',
    resultHeader_H2: '',
    resultDescription: '',
    priceHeader_H2: '',
    priceDescription: '',

    imageAlt: '',
  });
  const [newPhoto, setNewPhoto] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const [metaTitle__Helper, set__metaTitle__Helper] = useState('');
  const [metaDescription__Helper, set__metaDescription__Helper] = useState('');
  const [header_H1__Helper, set__header_H1__Helper] = useState('');

  const [advantageHeader_H2__Helper, set__advantageHeader_H2__Helper] =
    useState('');
  const [advantageDescription__Helper, set__advantageDescription__Helper] =
    useState('');
  const [timing_H2__Helper, set__timing_H2__Helper] = useState('');
  const [timingDescription__Helper, set__timingDescription__Helper] =
    useState('');
  const [preparationHeader_H2__Helper, set__preparationHeader_H2__Helper] =
    useState('');
  const [preparationDescription__Helper, set__preparationDescription__Helper] =
    useState('');
  const [
    recoveryAfterServiceHeader_H2__Helper,
    set__recoveryAfterServiceHeader_H2__Helper,
  ] = useState('');
  const [
    recoveryAfterServiceDescription__Helper,
    set__recoveryAfterServiceDescription__Helper,
  ] = useState('');
  const [resultHeader_H2__Helper, set__resultHeader_H2__Helper] = useState('');
  const [resultDescription__Helper, set__resultDescription__Helper] =
    useState('');
  const [priceHeader_H2__Helper, set__priceHeader_H2__Helper] = useState('');
  const [priceDescription__Helper, set__priceDescription__Helper] =
    useState('');

  const [imageAlt__Helper, set__imageAlt__Helper] = useState('');

  const {
    metaTitle,
    metaDescription,
    keyWords,
    procedures,
    header_H1,

    advantageHeader_H2,
    advantageDescription,
    timing_H2,
    timingDescription,
    preparationHeader_H2,
    preparationDescription,
    recoveryAfterServiceHeader_H2,
    recoveryAfterServiceDescription,
    resultHeader_H2,
    resultDescription,
    priceHeader_H2,
    priceDescription,

    imageAlt,
  } = formData;

  const clearFormData = () => {
    setFormData({
      metaTitle: '',
      metaDescription: '',
      keyWords: [],
      procedures: [],
      header_H1: '',

      advantageHeader_H2: '',
      advantageDescription: '',
      timing_H2: '',
      timingDescription: '',
      preparationHeader_H2: '',
      preparationDescription: '',
      recoveryAfterServiceHeader_H2: '',
      recoveryAfterServiceDescription: '',
      resultHeader_H2: '',
      resultDescription: '',
      priceHeader_H2: '',
      priceDescription: '',

      imageAlt: '',
    });
    setNewPhoto('');
    setPreviewUrl('');
  };
  useEffect(() => {
    dispatch(setNameOfPage('Добавить услугу'));
    dispatch(getAll__KEYWORD());
    dispatch(getAll__PROCEDURE());
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(
      addOne__SERVICE(
        newPhoto,
        metaTitle,
        metaDescription,
        keyWords,
        procedures,
        header_H1,

        advantageHeader_H2,
        advantageDescription,
        timing_H2,
        timingDescription,
        preparationHeader_H2,
        preparationDescription,
        recoveryAfterServiceHeader_H2,
        recoveryAfterServiceDescription,
        resultHeader_H2,
        resultDescription,
        priceHeader_H2,
        priceDescription,

        imageAlt,
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

      case 'advantageHeader_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__advantageHeader_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__advantageHeader_H2__Helper('');
        }
        break;
      case 'advantageDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__advantageDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__advantageDescription__Helper('');
        }
        break;
      case 'timing_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__timing_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__timing_H2__Helper('');
        }
        break;
      case 'timingDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__timingDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__timingDescription__Helper('');
        }
        break;
      case 'preparationHeader_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__preparationHeader_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__preparationHeader_H2__Helper('');
        }
        break;
      case 'preparationDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__preparationDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__preparationDescription__Helper('');
        }
        break;
      case 'recoveryAfterServiceHeader_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__recoveryAfterServiceHeader_H2__Helper(
            'Минимальная длина 3 знака'
          );
        } else {
          set__recoveryAfterServiceHeader_H2__Helper('');
        }
        break;
      case 'recoveryAfterServiceDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__recoveryAfterServiceDescription__Helper(
            'Минимальная длина 3 знака'
          );
        } else {
          set__recoveryAfterServiceDescription__Helper('');
        }
        break;
      case 'resultHeader_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__resultHeader_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__resultHeader_H2__Helper('');
        }
        break;
      case 'resultDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__resultDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__resultDescription__Helper('');
        }
        break;
      case 'priceHeader_H2':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__priceHeader_H2__Helper('Минимальная длина 3 знака');
        } else {
          set__priceHeader_H2__Helper('');
        }
        break;
      case 'priceDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__priceDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__priceDescription__Helper('');
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
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
      setNewPhoto(file);
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

      <Grid item xs={12} className={classes.wrapImg}>
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
        <InputLabel id='procedures-label'>Процедуры</InputLabel>
        <Select
          labelId='procedures-label'
          id='procedures'
          name='procedures'
          multiple
          required
          fullWidth
          value={procedures ? procedures : []}
          onChange={(e) => onChangeHandler(e)}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected &&
                selected.length > 0 &&
                state__PROCEDURE.array__PROCEDURE &&
                state__PROCEDURE.array__PROCEDURE.length > 0 &&
                selected.map((value) => {
                  const textToDispaly = state__PROCEDURE.array__PROCEDURE.find(
                    (item) => item._id === value
                  ).header_H1;

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
          {state__PROCEDURE.array__PROCEDURE &&
            state__PROCEDURE.array__PROCEDURE.length > 0 &&
            state__PROCEDURE.array__PROCEDURE.map((item) => (
              <MenuItem
                key={item._id}
                value={item._id}
                className={classes.selectItem}
              >
                <Checkbox
                  checked={procedures && procedures.indexOf(item._id) > -1}
                />
                {item.header_H1}
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

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='advantageHeader_H2'
          name='advantageHeader_H2'
          label='advantageHeader_H2'
          type='text'
          value={advantageHeader_H2 ? advantageHeader_H2 : ''}
          error={advantageHeader_H2__Helper.length !== 0}
          helperText={advantageHeader_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='advantageDescription'
          name='advantageDescription'
          label='advantageDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={advantageDescription ? advantageDescription : ''}
          error={advantageDescription__Helper.length !== 0}
          helperText={advantageDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='timing_H2'
          name='timing_H2'
          label='timing_H2'
          type='text'
          value={timing_H2 ? timing_H2 : ''}
          error={timing_H2__Helper.length !== 0}
          helperText={timing_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='timingDescription'
          name='timingDescription'
          label='timingDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={timingDescription ? timingDescription : ''}
          error={timingDescription__Helper.length !== 0}
          helperText={timingDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='preparationHeader_H2'
          name='preparationHeader_H2'
          label='preparationHeader_H2'
          type='text'
          value={preparationHeader_H2 ? preparationHeader_H2 : ''}
          error={preparationHeader_H2__Helper.length !== 0}
          helperText={preparationHeader_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='preparationDescription'
          name='preparationDescription'
          label='preparationDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={preparationDescription ? preparationDescription : ''}
          error={preparationDescription__Helper.length !== 0}
          helperText={preparationDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='recoveryAfterServiceHeader_H2'
          name='recoveryAfterServiceHeader_H2'
          label='recoveryAfterServiceHeader_H2'
          type='text'
          value={
            recoveryAfterServiceHeader_H2 ? recoveryAfterServiceHeader_H2 : ''
          }
          error={recoveryAfterServiceHeader_H2__Helper.length !== 0}
          helperText={recoveryAfterServiceHeader_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='recoveryAfterServiceDescription'
          name='recoveryAfterServiceDescription'
          label='recoveryAfterServiceDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={
            recoveryAfterServiceDescription
              ? recoveryAfterServiceDescription
              : ''
          }
          error={recoveryAfterServiceDescription__Helper.length !== 0}
          helperText={recoveryAfterServiceDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='resultHeader_H2'
          name='resultHeader_H2'
          label='resultHeader_H2'
          type='text'
          value={resultHeader_H2 ? resultHeader_H2 : ''}
          error={resultHeader_H2__Helper.length !== 0}
          helperText={resultHeader_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='resultDescription'
          name='resultDescription'
          label='resultDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={resultDescription ? resultDescription : ''}
          error={resultDescription__Helper.length !== 0}
          helperText={resultDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='priceHeader_H2'
          name='priceHeader_H2'
          label='priceHeader_H2'
          type='text'
          value={priceHeader_H2 ? priceHeader_H2 : ''}
          error={priceHeader_H2__Helper.length !== 0}
          helperText={priceHeader_H2__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='priceDescription'
          name='priceDescription'
          label='priceDescription'
          type='text'
          multiline
          rowsMax={8}
          // placeholder='Ответ на вопрос'
          value={priceDescription ? priceDescription : ''}
          error={priceDescription__Helper.length !== 0}
          helperText={priceDescription__Helper}
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
            (procedures && procedures.length === 0) ||
            !header_H1 ||
            !advantageHeader_H2 ||
            !advantageDescription ||
            !timing_H2 ||
            !timingDescription ||
            !preparationHeader_H2 ||
            !preparationDescription ||
            !recoveryAfterServiceHeader_H2 ||
            !recoveryAfterServiceDescription ||
            !resultHeader_H2 ||
            !resultDescription ||
            !priceHeader_H2 ||
            !priceDescription ||
            !imageAlt ||
            metaTitle__Helper.length !== 0 ||
            metaDescription__Helper.length !== 0 ||
            header_H1__Helper.length !== 0 ||
            advantageHeader_H2__Helper.length !== 0 ||
            advantageDescription__Helper.length !== 0 ||
            timing_H2__Helper.length !== 0 ||
            timingDescription__Helper.length !== 0 ||
            preparationHeader_H2__Helper.length !== 0 ||
            preparationDescription__Helper.length !== 0 ||
            recoveryAfterServiceHeader_H2__Helper.length !== 0 ||
            recoveryAfterServiceDescription__Helper.length !== 0 ||
            resultHeader_H2__Helper.length !== 0 ||
            resultDescription__Helper.length !== 0 ||
            priceHeader_H2__Helper.length !== 0 ||
            priceDescription__Helper.length !== 0 ||
            imageAlt__Helper.length !== 0 ||
            !newPhoto
          }
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

ServiceAdd.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  addOne__SERVICE: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__KEYWORD: PropTypes.object,
  state__PROCEDURE: PropTypes.object,
};

export default ServiceAdd;
