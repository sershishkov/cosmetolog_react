import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ImageInvitation from '../../images/home/invitation.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3rem 1rem',

    backgroundColor: theme.palette.common.white,
    height: 918,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      height: 691,
    },
    [theme.breakpoints.down('sm')]: {
      height: 918,
    },
  },
  Button: {
    backgroundColor: theme.palette.common.colorGreen,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.colorGreen,
      border: `1px solid ${theme.palette.common.colorGreen}`,
    },
  },
  wrapInvite: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  contInvite: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // 'text-align': 'right',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      'text-align': 'center',
    },
  },
  contInvite__item: {
    width: '90%',
    margin: '20px 0px',
    '& p': {
      display: '-webkit-box',
      '-webkit-line-clamp': 4 /* количество строк */,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  wrapPhoto: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: 632,
    },

    '& img': {
      width: '100%',
      height: '120%',
      borderRadius: '194px 194px 0px 0px',
      [theme.breakpoints.down('md')]: {
        borderRadius: '140px 140px 0px 0px',
      },
      [theme.breakpoints.down('sm')]: {
        borderRadius: '86px 86px 0px 0px',
      },
    },
    '& div': {
      position: 'absolute',
      top: -20,
      left: 0,
      width: '100%',
      height: '110%',
      background:
        'radial-gradient( rgba(255, 255, 255, 0)  , rgba(255, 251, 244, 0.87) ) ',
    },
  },
}));

const Invitation = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xm={12} sm={12} md={6} lg={6} className={classes.wrapInvite}>
        <Grid container className={classes.contInvite}>
          <Grid item className={classes.contInvite__item}>
            <Typography variant='h1'>Элла Тодосиенко</Typography>
          </Grid>
          <Grid item className={classes.contInvite__item}>
            <Typography variant='body1' component='p'>
              Частный косметолог с более чем 30 годами международного
              опыта,Частный косметолог с более чем 30 годами международного
              опыта Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              dicta. Tenetur obcaecati consequatur optio commodi similique
              fugiat, ex in fugit officia harum consectetur illum, aliquam
              accusantium explicabo quibusdam modi voluptate! Частный косметолог
              с более чем 30 годами международного опыта,Частный косметолог с
              более чем 30 годами международного опыта Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ab, dicta. Tenetur obcaecati
              consequatur optio commodi similique fugiat, ex in fugit officia
              harum consectetur illum, aliquam accusantium explicabo quibusdam
              modi voluptate!
            </Typography>
          </Grid>
          <Grid item className={classes.contInvite__item}>
            <Button className={classes.Button}>Записаться на приём</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xm={12} sm={12} md={6} lg={6} className={classes.wrapPhoto}>
        <img src={ImageInvitation} alt='invitation' />
        <div className={classes.wrapPhoto_Gradient}></div>
      </Grid>
    </Grid>
  );
};

export default Invitation;
