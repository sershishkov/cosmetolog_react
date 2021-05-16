import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import { addOne__DRUG } from '../../../reduxStore/actions/admin/drug';

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

const DrugAdd = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const history = useHistory();

  const [formData, setFormData] = useState({
    drugName: '',
    drugDescription: '',
  });
  const [drugName__Helper, set__drugName__Helper] = useState('');
  const [drugDescription__Helper, set__drugDescription__Helper] = useState('');

  const { drugName, drugDescription } = formData;

  const clearFormData = () => {
    setFormData({
      drugName: '',
      drugDescription: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Добавить лекарство'));
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(addOne__DRUG(drugName, drugDescription, history));

    clearFormData();
    // history.goBack();
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'drugName':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__drugName__Helper('Минимальная длина 3 знака');
        } else {
          set__drugName__Helper('');
        }
        break;

      case 'drugDescription':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__drugDescription__Helper('Минимальная длина 3 знака');
        } else {
          set__drugDescription__Helper('');
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
          id='drugName'
          name='drugName'
          label='Ключевое слово'
          type='text'
          value={drugName ? drugName : ''}
          error={drugName__Helper.length !== 0}
          helperText={drugName__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <TextField
          // autoFocus
          id='drugDescription'
          name='drugDescription'
          label='drugDescription'
          type='text'
          multiline
          rowsMax={8}
          placeholder='Ответ на вопрос'
          value={drugDescription ? drugDescription : ''}
          error={drugDescription__Helper.length !== 0}
          helperText={drugDescription__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <Button
          disabled={
            !drugName ||
            drugName__Helper.length !== 0 ||
            !drugDescription ||
            drugDescription__Helper.length !== 0
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

DrugAdd.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,
  addOne__DRUG: PropTypes.func,

  ////States
  state__nameOfPage: PropTypes.string,
};

export default DrugAdd;
