import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

import Image__1 from '../../images/Blog/DSC_3029-685x1024.jpg';
import Image__2 from '../../images/Blog/Ботулинотерапия.jpg';
import Image__3 from '../../images/Blog/DSC_3057-685x1024.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    '& h5': {
      // color: '#f00',
      display: '-webkit-box',
      '-webkit-line-clamp': 3 /* количество строк */,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  rootItem: {
    marginBottom: '1rem',
  },
  rootItem__header: {
    marginBottom: '5rem',
  },
  rootItem__main: {},

  container_Main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mainItem: {
    height: 124,
    marginBottom: '4rem',
  },
  container_Row: {
    height: '100%',
    display: 'flex',
  },
  wrapImage: {
    height: '100%',
    width: '100%',

    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 20,
    },
  },
  wrapArticle: {
    height: '100%',
  },
  containerArticle: {
    height: '100%',
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  articleItem: {
    marginBottom: '1rem',
  },
  articleHeader: {},
  articleDescription: {},
  wrapAction: {
    height: '100%',
  },
  contActionReadMore: {
    height: '100%',
    display: 'flex',
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionReadMore: {},

  contAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__header}`}>
        <Typography variant='h1'>Авторский Блог</Typography>
      </Grid>

      <Grid item className={`${classes.rootItem} ${classes.rootItem__main}`}>
        <Grid container className={`${classes.container_Main}`}>
          <Grid item className={`${classes.mainItem}`}>
            <Grid container spacing={2} className={`${classes.container_Row}`}>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapImage}`}
              >
                <img src={Image__1} alt='ботекс' />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.wrapArticle}`}
              >
                <Grid container className={`${classes.containerArticle}`}>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleHeader}`}
                  >
                    <Typography variant='h2'>Ботекс, с чего начать?</Typography>
                  </Grid>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleDescription}`}
                  >
                    <Typography variant='h5'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque quasi eveniet laborum error dolor unde distinctio
                      quis, saepe ipsa, repudiandae a quisquam, fugiat eligendi
                      consectetur explicabo natus molestiae excepturi
                      consequatur. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Atque quasi eveniet laborum error dolor
                      unde distinctio quis, saepe ipsa, repudiandae a quisquam,
                      fugiat eligendi consectetur explicabo natus molestiae
                      excepturi consequatur.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapAction}`}
              >
                <Grid container className={classes.contActionReadMore}>
                  <Grid item className={classes.actionReadMore}>
                    <Button>
                      Оставить отзыв <ArrowRightAltIcon />{' '}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={`${classes.mainItem}`}>
            <Grid container className={`${classes.container_Row}`}>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapImage}`}
              >
                <img src={Image__2} alt='ботекс' />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.wrapArticle}`}
              >
                <Grid container className={`${classes.containerArticle}`}>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleHeader}`}
                  >
                    <Typography variant='h2'>
                      Контурная пластика, для кого?
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleDescription}`}
                  >
                    <Typography variant='h5'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque quasi eveniet laborum error dolor unde distinctio
                      quis, saepe ipsa, repudiandae a quisquam, fugiat eligendi
                      consectetur explicabo natus molestiae excepturi
                      consequatur. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Atque quasi eveniet laborum error dolor
                      unde distinctio quis, saepe ipsa, repudiandae a quisquam,
                      fugiat eligendi consectetur explicabo natus molestiae
                      excepturi consequatur.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapAction}`}
              >
                <Grid container className={classes.contActionReadMore}>
                  <Grid item className={classes.actionReadMore}>
                    <Button>
                      Оставить отзыв <ArrowRightAltIcon />{' '}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={`${classes.mainItem}`}>
            <Grid container className={`${classes.container_Row}`}>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapImage}`}
              >
                <img src={Image__3} alt='ботекс' />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.wrapArticle}`}
              >
                <Grid container className={`${classes.containerArticle}`}>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleHeader}`}
                  >
                    <Typography variant='h2'>
                      Контурная пластика, для кого?
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className={`${classes.articleItem} ${classes.articleDescription}`}
                  >
                    <Typography variant='h5'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque quasi eveniet laborum error dolor unde distinctio
                      quis, saepe ipsa, repudiandae a quisquam, fugiat eligendi
                      consectetur explicabo natus molestiae excepturi
                      consequatur. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Atque quasi eveniet laborum error dolor
                      unde distinctio quis, saepe ipsa, repudiandae a quisquam,
                      fugiat eligendi consectetur explicabo natus molestiae
                      excepturi consequatur.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={`${classes.wrapAction}`}
              >
                <Grid container className={classes.contActionReadMore}>
                  <Grid item className={classes.actionReadMore}>
                    <Button>
                      Оставить отзыв <ArrowRightAltIcon />{' '}
                    </Button>
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
              Смотреть больше <ArrowRightAltIcon />{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blog;
