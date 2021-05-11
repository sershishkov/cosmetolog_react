import React from 'react';
import Swiper from 'swiper';
// import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { makeStyles } from '@material-ui/styles';

const photos = [
  // { imageUrl: '/images/expertise/001.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/002.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/003.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/004.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/005.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/006.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/007.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/008.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/009.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/010.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/011.jpg', imageAlt: 'certificate' },
  { imageUrl: '/images/expertise/012.jpg', imageAlt: 'certificate' },
  // { imageUrl: '/images/expertise/013.jpg', imageAlt: 'certificate' },
];

const useStyles = makeStyles((theme) => ({
  myContainer: {
    // width: 500,
    height: '100%',
  },
  myWrapper: {
    width: '100%',
    height: '100%',
  },
  mySwiperSlide: {
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  myPagination: {},
  mySwiperButton: {
    color: theme.palette.common.colorGreen,
  },
  mySwiperScrollBar: {},
}));
SwiperCore.use([Navigation, Pagination]);
export const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  init: true,
  loop: true,
  // parallax: true,

  autoplay: {
    delay: 1000,
  },
  // speed: 1000,
  // slidesPerView: 2,
  // spaceBetween: 0,
  // autoHeight: true,
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //   },
  //   // when window width is >= 600px
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 1,
  //   },
  //   // when window width is >= 960px
  //   960: {
  //     slidesPerView: 2,
  //     spaceBetween: 4,
  //   },
  // },
  effect: 'slide', //"slide", "fade", "cube", "coverflow" or "flip"
  // followFinger: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const CarouselSwiper = (props) => {
  const classes = useStyles();
  return (
    <div
      className={`swiper-container ${classes.myContainer}`}
      style={{ width: props.width }}
    >
      <div className={`swiper-wrapper ${classes.myWrapper}`}>
        {photos.map((item) => (
          <div
            key={item.imageUrl}
            className={`swiper-slide ${classes.mySwiperSlide}`}
          >
            <img src={item.imageUrl} alt={item.imageAlt} />
          </div>
        ))}
      </div>
      {/* <!-- If we need pagination --> */}
      <div className={`swiper-pagination ${classes.myPagination}`}></div>
      {/* <!-- If we need navigation buttons --> */}
      <div className={`swiper-button-prev ${classes.mySwiperButton}`}></div>
      <div className={`swiper-button-next ${classes.mySwiperButton}`}></div>

      {/* <!-- If we need scrollbar --> */}
      <div className={`swiper-scrollbar ${classes.mySwiperScrollBar}`}></div>
    </div>
  );
};

export default CarouselSwiper;
