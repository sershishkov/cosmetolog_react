import React, { useEffect, useState, useLayoutEffect } from 'react';
import { DatePicker } from '@material-ui/pickers';
import IMask from 'imask';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  updateDetails,
  updatePassword,
} from '../../../reduxStore/actions/user/auth';

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
  item: {
    marginBottom: '2rem',
  },
  wrapImg: {
    width: 60,
    height: 60,
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

const UserOffice = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__AUTH = useSelector((state) => state.auth);
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    patronymic: '',
    lastName: '',
    telNumber: '',
    email: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const [newPhoto, setNewPhoto] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [dateBirth, setDateBirth] = useState(new Date());

  const [name__Helper, set__name__Helper] = useState('');
  const [patronymic__Helper, set__patronymic__Helper] = useState('');
  const [lastName__Helper, set__lastName__Helper] = useState('');
  const [telNumber__Helper, set__telNumber__Helper] = useState('');
  const [email__Helper, set__email__Helper] = useState('');
  const [currentPassword__Helper, set__currentPassword__Helper] = useState('');
  const [newPassword__Helper, set__newPassword__Helper] = useState('');

  const { name, patronymic, lastName, telNumber, email } = formData;

  const { currentPassword, newPassword } = passwordData;

  const clearFormData = () => {
    setFormData({
      name: '',
      patronymic: '',
      lastName: '',
      telNumber: '',
      email: '',
    });
    setNewPhoto('');
    setPreviewUrl('');
    setDateBirth(new Date());
  };

  const clearPasswordData = () => {
    setPasswordData({
      currentPassword: '',
      newPassword: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Мой кабинет'));
  }, [dispatch]);

  useLayoutEffect(() => {
    if (state__AUTH.user) {
      setFormData({
        name: state__AUTH.user.name ? state__AUTH.user.name : '',
        patronymic: state__AUTH.user.patronymic
          ? state__AUTH.user.patronymic
          : '',
        lastName: state__AUTH.user.lastName ? state__AUTH.user.lastName : '',
        telNumber: state__AUTH.user.telNumber ? state__AUTH.user.telNumber : '',
        email: state__AUTH.user.email ? state__AUTH.user.email : '',
      });

      setPreviewUrl(
        state__AUTH.user.myAvatar
          ? state__AUTH.user.myAvatar
          : '/uploads/default_user.jpg'
      );
      setDateBirth(
        state__AUTH.user.dateBirth ? state__AUTH.user.dateBirth : new Date()
      );
    }
  }, [state__AUTH.user]);

  const onSubmitDetails = () => {
    dispatch(
      updateDetails(
        newPhoto,
        name,
        patronymic,
        lastName,
        telNumber,
        dateBirth,
        email,
        history
      )
    );

    clearFormData();
  };

  const onSubmitPassword = () => {
    dispatch(updatePassword(currentPassword, newPassword, history));

    clearPasswordData();
  };

  const onChangePasswordHandler = (event) => {
    setPasswordData({
      ...passwordData,
      [event.target.name]: event.target.value,
    });

    let valid;
    switch (event.target.id) {
      case 'currentPassword':
        valid = event.target.value.length >= 6;
        if (!valid) {
          set__currentPassword__Helper('Минимальная длинна пароля 6 знаков');
        } else {
          set__currentPassword__Helper('');
        }
        break;

      case 'newPassword':
        valid = event.target.value.length >= 6;
        if (!valid) {
          set__newPassword__Helper('Минимальная длинна пароля 6 знаков');
        } else {
          set__newPassword__Helper('');
        }
        break;

      default:
        break;
    }
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'name':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__name__Helper('Минимальная длина 3 знака');
        } else {
          set__name__Helper('');
        }
        break;

      case 'patronymic':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__patronymic__Helper('Минимальная длина 3 знака');
        } else {
          set__patronymic__Helper('');
        }
        break;

      case 'lastName':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__lastName__Helper('Минимальная длина 3 знака');
        } else {
          set__lastName__Helper('');
        }
        break;

      case 'telNumber':
        valid = event.target.value.length === 17;
        if (!valid) {
          set__telNumber__Helper('не достаточно цифр');
        } else {
          set__telNumber__Helper('');
        }
        break;

      case 'email':
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          set__email__Helper('Не верный email');
        } else {
          set__email__Helper('');
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
  const onInputHandler = (event) => {
    const inputMask_phoneNumber = {
      mask: '+{38}(000)000-00-00',
    };
    IMask(event.target, inputMask_phoneNumber);
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
          id='name'
          name='name'
          label='name'
          type='text'
          value={name ? name : ''}
          error={name__Helper.length !== 0}
          helperText={name__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='patronymic'
          name='patronymic'
          label='patronymic'
          type='text'
          value={patronymic ? patronymic : ''}
          error={patronymic__Helper.length !== 0}
          helperText={patronymic__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='lastName'
          name='lastName'
          label='lastName'
          type='text'
          value={lastName ? lastName : ''}
          error={lastName__Helper.length !== 0}
          helperText={lastName__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <DatePicker
          id='dateBirth'
          name='dateBirth'
          label='Дата рождения'
          format='dd-MM-yyyy'
          value={dateBirth ? dateBirth : ''}
          fullWidth
          autoOk
          animateYearScrolling
          disableFuture
          openTo='year'
          onChange={(newDate) => {
            setDateBirth(newDate);
          }}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='email'
          name='email'
          label='email'
          type='email'
          value={email ? email : ''}
          error={email__Helper.length !== 0}
          helperText={email__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          id='telNumber'
          name='telNumber'
          label='Телефон'
          type='tel'
          value={telNumber ? telNumber : ''}
          error={telNumber__Helper.length !== 0}
          helperText={telNumber__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
          onInput={(e) => onInputHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <Button
          // disabled={ }
          fullWidth
          variant='contained'
          onClick={() => onSubmitDetails()}
          color='primary'
        >
          Обновить данные
        </Button>
      </Grid>
      <Grid item className={classes.item}>
        <Typography variant='h3' align='center'>
          Обновить пароль
        </Typography>
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='currentPassword'
          name='currentPassword'
          label='currentPassword'
          type='password'
          value={currentPassword ? currentPassword : ''}
          error={currentPassword__Helper.length !== 0}
          helperText={currentPassword__Helper}
          fullWidth
          onChange={(e) => onChangePasswordHandler(e)}
        />
      </Grid>
      <Grid item className={`${classes.item} `}>
        <TextField
          // autoFocus
          id='newPassword'
          name='newPassword'
          label='newPassword'
          type='password'
          value={newPassword ? newPassword : ''}
          error={newPassword__Helper.length !== 0}
          helperText={newPassword__Helper}
          fullWidth
          onChange={(e) => onChangePasswordHandler(e)}
        />
      </Grid>
      <Button
        // disabled={ }
        fullWidth
        variant='contained'
        onClick={() => onSubmitPassword()}
        color='primary'
      >
        Обновить пароль
      </Button>
    </Grid>
  );
};

UserOffice.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  updateDetails: PropTypes.func,
  updatePassword: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__AUTH: PropTypes.object,
};

export default UserOffice;
