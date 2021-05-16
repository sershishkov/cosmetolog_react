import React, { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import {
  getOne__USER,
  updateOne__USER,
} from '../../../reduxStore/actions/user/users';

import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width('sm'),
    width: '100%',
    margin: 'auto',
  },
  item: {
    marginBottom: '2rem',
  },
}));

const UserAdminEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const state__USER = useSelector((state) => state.users);
  const history = useHistory();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });
  const [name__Helper, set__name__Helper] = useState('');
  const [email__Helper, set__email__Helper] = useState('');
  const [password__Helper, set__password__Helper] = useState('');

  const { name, email, role, password } = formData;

  const clearFormData = () => {
    setFormData({
      name: '',
      email: '',
      role: '',
      password: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Редактировать клиента'));
    if (id) {
      dispatch(getOne__USER(id));
    }
  }, [dispatch, id]);

  useLayoutEffect(() => {
    if (state__USER.one__USER) {
      setFormData({
        name: state__USER.one__USER.name ? state__USER.one__USER.name : '',
        email: state__USER.one__USER.email ? state__USER.one__USER.email : '',
        role: state__USER.one__USER.role ? state__USER.one__USER.role : '',
      });
    }
  }, [state__USER.one__USER]);

  const onSubmit = () => {
    dispatch(updateOne__USER(name, email, role, password, id, history));

    clearFormData();
    // history.goBack();
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'name':
        valid = event.target.value.length >= 2;
        if (!valid) {
          set__name__Helper('Слишком короткое Имя');
        } else {
          set__name__Helper('');
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

      case 'password':
        valid = event.target.value.length >= 6;
        if (!valid) {
          set__password__Helper('Минимальная длинна пароля 6 знаков');
        } else {
          set__password__Helper('');
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
          error={name__Helper.length !== 0}
          helperText={name__Helper}
          type='text'
          name='name'
          variant='outlined'
          required
          fullWidth
          id='name'
          label='Ваше Имя'
          autoFocus
          value={name}
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <TextField
          error={email__Helper.length !== 0}
          helperText={email__Helper}
          variant='outlined'
          type='email'
          required
          fullWidth
          id='email'
          label='Электронная почта'
          name='email'
          autoComplete='email'
          value={email}
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          error={password__Helper.length !== 0}
          helperText={password__Helper}
          variant='outlined'
          required
          fullWidth
          name='password'
          label='пароль'
          type='password'
          id='password'
          value={password}
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <InputLabel
          id='user-role-label'
          className={role ? classes.displayNone : classes.displayFlex}
        >
          Выбрать роль
        </InputLabel>
        <Select
          labelId='user-role-label'
          fullWidth
          variant='outlined'
          name='role'
          value={role}
          onChange={(e) => onChangeHandler(e)}
        >
          <MenuItem value='user'>user</MenuItem>
          <MenuItem value='client'>client</MenuItem>
          <MenuItem value='admin'>Админ</MenuItem>
        </Select>
      </Grid>

      <Grid item className={classes.item}>
        <Button
          disabled={
            !name ||
            !email ||
            !role ||
            !password ||
            name__Helper.length !== 0 ||
            email__Helper.length !== 0 ||
            password__Helper.length !== 0
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

UserAdminEdit.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  getOne__USER: PropTypes.func,
  updateOne__USER: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
  state__USER: PropTypes.object,
};

export default UserAdminEdit;
