import { createMuiTheme } from '@material-ui/core/styles';

const colorGrey_1 = '#FDFDFA';
const colorGrey_2 = '#F3F3F0';
const colorGrey_3 = '#E9E8E6';
const colorGrey_4 = '#C1C0BE';
const colorGrey_5 = '#999896';
const colorGrey_6 = '#7B7A78';
const colorGrey_7 = '#5D5D5A';
const colorGrey_8 = '#353432';
const colorGrey_9 = '#21201E';

const color_H1 = '#5D574D';
const color_H1_Light = '#AAA397';
const color_H2 = '#5D574D';
const color_H3 = '#272420';
const color_H4 = '#272420';
const color_H5 = '#272420';
const color_H6 = '#272420';
const color_Body1 = '#272420';
const color_Body2 = '#272420';

const colorBlack = '#030200';
const colorWhite = '#FFFDFA';
const colorGreen = '#9CCE9B';

// const fontSize_12 = '1.2rem';
// const fontSize_16 = '1.6rem';
// const fontSize_20 = '2rem';
// const fontSize_28 = '2.8rem';
// const fontSize_32 = '3.2rem';
// const fontSize_44 = '4.4rem';

export default createMuiTheme({
  palette: {
    common: {
      colorGrey_1,
      colorGrey_2,
      colorGrey_3,
      colorGrey_4,
      colorGrey_5,
      colorGrey_6,
      colorGrey_7,
      colorGrey_8,
      colorGrey_9,
      colorBlack,
      colorWhite,
      colorGreen,
      color_H1,
      color_H1_Light,
      color_H2,
      color_H3,
      color_H4,
      color_H5,
      color_H6,
      color_Body1,
      color_Body2,
    },
    // primary: {
    //   main: '#90caf9',
    // },
    // secondary: {
    //   main: '#f48fb1',
    // },
  },
  typography: {
    h1: {
      fontFamily: 'Noto Serif',
      fontStyle: 'normal',
      // fontWeight: 700,
      // fontSize: fontSize_44, //'44px',
      // lineHeight: fontSize_44,
      color: color_H1,
    },
    h2: {
      fontFamily: 'Noto Serif',
      fontStyle: 'normal',
      // fontWeight: 700,
      // fontSize: fontSize_32,
      // lineHeight: fontSize_32,
      color: color_H2,
    },
    h3: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 600,
      // fontSize: fontSize_28,
      // lineHeight: fontSize_28,
      color: color_H3,
    },
    h4: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 500,
      // fontSize: fontSize_20,
      // lineHeight: fontSize_20,
      color: color_H4,
    },
    h5: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 400,
      // fontSize: fontSize_16,
      // lineHeight: fontSize_16,
      color: color_H5,
    },
    h6: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 300,
      // fontSize: fontSize_12,
      // lineHeight: fontSize_12,
      color: color_H6,
    },
    body1: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 'normal',
      // fontSize: fontSize_16,
      // lineHeight: fontSize_16,
      color: color_Body1,
    },
    body2: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      // fontWeight: 'normal',
      // fontSize: fontSize_12,
      // lineHeight: fontSize_12,
      color: color_Body2,
    },
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {},
  },
  // overrides: {
  //   MuiInputLabel: {
  //     root: {
  //       // color: arcBlue,
  //       // fontSize: '1rem',
  //     },
  //   },
  //   MuiInput: {
  //     root: {
  //       // fontWeight: 300,
  //       // color: arcGrey,
  //     },
  //     underline: {
  //       '&:before': {
  //         borderBottom: `2px solid ${arcBlue}`,
  //       },
  //       '&:hover:not($disabled):not($focused):not($error):before': {
  //         borderBottom: `2px solid ${arcBlue}`,
  //       },
  //     },
  //   },
  // },
});
