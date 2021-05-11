import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

import Image_001 from '../../images/expertise/001.jpg';
import Image_002 from '../../images/expertise/002.jpg';
import Image_003 from '../../images/expertise/003.jpg';
import Image_004 from '../../images/expertise/004.jpg';
import Image_005 from '../../images/expertise/005.jpg';
import Image_006 from '../../images/expertise/006.jpg';
import Image_007 from '../../images/expertise/007.jpg';
import Image_008 from '../../images/expertise/008.jpg';
import Image_009 from '../../images/expertise/009.jpg';
import Image_010 from '../../images/expertise/010.jpg';
import Image_011 from '../../images/expertise/011.jpg';
import Image_012 from '../../images/expertise/012.jpg';
import Image_013 from '../../images/expertise/013.jpg';

const photos = [
  { imageUrl: Image_001, imageAlt: 'certificate' },
  { imageUrl: Image_002, imageAlt: 'certificate' },
  { imageUrl: Image_003, imageAlt: 'certificate' },
  { imageUrl: Image_004, imageAlt: 'certificate' },
  { imageUrl: Image_005, imageAlt: 'certificate' },
  { imageUrl: Image_006, imageAlt: 'certificate' },
  { imageUrl: Image_007, imageAlt: 'certificate' },
  { imageUrl: Image_008, imageAlt: 'certificate' },
  { imageUrl: Image_009, imageAlt: 'certificate' },
  { imageUrl: Image_010, imageAlt: 'certificate' },
  { imageUrl: Image_011, imageAlt: 'certificate' },
  { imageUrl: Image_012, imageAlt: 'certificate' },
  { imageUrl: Image_013, imageAlt: 'certificate' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  rootItem: {
    marginBottom: '2rem',
  },
  rootItem__main: {},
  contMain: {
    // width: '100%',
  },
  mainItem: {},
  mainItem_slider: {
    height: 700,
    // height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 700,
    },
  },

  mainItem_statistics: {
    height: 700,
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  cont_statistics: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  statistic_row: {
    width: '100%',
  },
  cont_Description: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  description_wrap: {},
  cont_Content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content_item_header: {
    '& h3': {
      fontWeight: '700',
    },
  },
  content_item_description: {
    '& h6': {
      fontWeight: '600',
    },
  },

  contAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '100%',
    maxWidth: 650,
    display: 'flex',
    height: 700,
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  carouselItem: {
    // width: '100%',
    // height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      // height: 'auto',
      // objectFit: 'cover',
    },
  },
}));

const Expertise = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__header}`}>
        <Typography variant='h1'>Экспертиза</Typography>
      </Grid>

      <Grid item className={`${classes.rootItem} ${classes.rootItem__main}`}>
        <Grid container className={classes.contMain}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.mainItem} ${classes.mainItem_slider}`}
          >
            <Carousel>
              {photos.map((item, i) => (
                <Grid key={i} container className={classes.carouselContainer}>
                  <Grid item className={classes.carouselItem}>
                    <img src={item.imageUrl} alt={item.imageAlt} />
                  </Grid>
                </Grid>
              ))}
            </Carousel>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.mainItem} ${classes.mainItem_statistics}`}
          >
            <Grid container className={`${classes.cont_statistics}`}>
              <Grid item className={`${classes.statistic_row}`}>
                <Grid container className={`${classes.cont_Description}`}>
                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>30 лет</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Стаж работы</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>253</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Учеников</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item className={`${classes.statistic_row}`}>
                <Grid container className={`${classes.cont_Description}`}>
                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>1 000+</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Клиентских визитов</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>1 000+</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Красивых губ</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={`${classes.rootItem} ${classes.rootItem__action}`}>
        <Grid container className={classes.contAction}>
          <Grid item className={classes.actionMore}>
            <Button>
              Смотреть все сертификаты <ArrowRightAltIcon />{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Expertise;
