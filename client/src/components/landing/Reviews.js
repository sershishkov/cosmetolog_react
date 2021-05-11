import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  rootItem: {
    marginBottom: '1rem',
  },
  rootItem__header: {},
  rootItem__main: {},
  contSlider: {
    height: 300,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },
  wrapSlider: {
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  wrapArticle: {
    height: '100%',
    // width: '100%',
  },
  container_Article: {
    height: '100%',
    width: '100%',
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-between',
  },
  articleItem: {
    marginBottom: '1rem',
  },
  articleHeader: {},
  articleDescription: {
    '& h5': {
      // color: '#f00',
      display: '-webkit-box',
      '-webkit-line-clamp': 5 /* количество строк */,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  contAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const rewiewsArr = [
  {
    id: 'r1',
    author: 'Анастасия Стоцкая',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r2',
    author: 'Виктория Абрамова',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r3',
    author: 'Арнольд',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r4',
    author: 'Достоевский',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r5',
    author: 'Александр Пушкин',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r6',
    author: 'Михаил Булкагов',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r7',
    author: 'Тарас Шевченко',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r8',
    author: 'Гоголь',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r9',
    author: 'Аристотель',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r10',
    author: 'Леонардо Давинчи',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r11',
    author: 'Микеладжело',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r12',
    author: 'Иван Грозный',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r13',
    author: 'Перельман',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r14',
    author: 'Каспаров',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
  {
    id: 'r15',
    author: 'Кембербедж',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati aspernatur vero, hic, numquam expedita quo et in dolores incidunt blanditiis amet harum neque a delectus perferendis sint tempora!',
  },
];

const Reviews = () => {
  const classes = useStyles();

  const transformedArr = [];

  for (let i = 0; i < rewiewsArr.length; i = i + 3) {
    const card = (
      <Grid container className={classes.cardContainer}>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          className={`${classes.wrapArticle}`}
        >
          <Grid container className={`${classes.container_Article}`}>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleHeader}`}
            >
              <Typography variant='h2'>{rewiewsArr[i].author}</Typography>
            </Grid>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleDescription}`}
            >
              <Typography variant='h5'>{rewiewsArr[i].text}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          className={`${classes.wrapArticle}`}
        >
          <Grid container className={`${classes.container_Article}`}>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleHeader}`}
            >
              <Typography variant='h2'>{rewiewsArr[i + 1].author}</Typography>
            </Grid>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleDescription}`}
            >
              <Typography variant='h5'>{rewiewsArr[i + 1].text}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          className={`${classes.wrapArticle}`}
        >
          <Grid container className={`${classes.container_Article}`}>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleHeader}`}
            >
              <Typography variant='h2'>{rewiewsArr[i + 2].author}</Typography>
            </Grid>
            <Grid
              item
              className={`${classes.articleItem} ${classes.articleDescription}`}
            >
              <Typography variant='h5'>{rewiewsArr[i + 2].text}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );

    transformedArr.push(card);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__header}`}>
        <Typography variant='h1'>Отзывы</Typography>
      </Grid>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__main}`}>
        <Grid container className={`${classes.contSlider}`}>
          <Grid item className={`${classes.wrapSlider}`}>
            <Carousel fullHeightHover>
              {transformedArr.map((item, i) => (
                <Fragment key={i}>{item}</Fragment>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__action}`}>
        <Grid container className={classes.contAction}>
          <Grid item className={classes.actionMore}>
            <Button>
              Оставить отзыв <ArrowRightAltIcon />{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reviews;
