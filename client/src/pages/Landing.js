import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { useDispatch, useSelector } from 'react-redux';
import { setNameOfPage } from '../reduxStore/actions/nameOfPage';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Invitation from '../components/landing/Invitation';
import Services from '../components/landing/Services';
import Expertise from '../components/landing/Expertise';
import Reviews from '../components/landing/Reviews';
import Blog from '../components/landing/Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFDFA',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  console.log(state__nameOfPage);

  useEffect(() => {
    dispatch(setNameOfPage('Главная'));
  }, [dispatch]);
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      className={classes.root}
    >
      <Helmet>
        <title>Cosmetolog</title>
        <link rel='canonical' href='https://cosmetolog.zp.ua/' />
        <meta name='description' content='Лучший косметолог Запорожья' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Helmet>

      <Invitation />
      <Services />
      <Expertise />
      <Reviews />
      <Blog />
    </Grid>
  );
};

Landing.propTypes = {
  /////Actions//////
  setNameOfPage: PropTypes.func,

  ////States
  // state__nameOfPage: PropTypes.string,
};

export default Landing;
