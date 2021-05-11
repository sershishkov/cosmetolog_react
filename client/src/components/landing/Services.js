import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';
// import SvgLipOne from '../../images/svg/SVG_LipOne';
// import SvgLipTwo from '../../images/svg/SVGLipTwo';
// import SvgLipThree from '../../images/svg/SVGLipThree';
// import SvgLipFour from '../../images/svg/SVGLipFour';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: '3rem 1rem',

    '& h5': {
      // color: '#f00',
      display: '-webkit-box',
      '-webkit-line-clamp': 5 /* количество строк */,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  rootItem: {
    margin: '3rem 0rem',
  },
  contServiceRow: {},
  wrapService: {},
  contService: {},
  service_icon: {
    height: 100,
  },
  service_icon_warap_svg: {
    height: '100%',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  item_article: {
    marginBottom: '1rem',
  },
  service_header: {},
  service_description: {},
  service_action: {},
  contAction: {},
  actionMore: {},
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item className={classes.rootItem}>
        <Typography variant='h1' align='left'>
          Услуги
        </Typography>
      </Grid>

      <Grid item className={classes.rootItem}>
        <Grid container className={classes.contServiceRow}>
          <Grid
            item
            xm={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.wrapService}
          >
            <Grid container direction='column' className={classes.contService}>
              <Grid
                item
                className={`${classes.item_article}  ${classes.service_icon}`}
              >
                <Grid container className={classes.service_icon_warap_svg}>
                  <Grid item>
                    {/* <SvgLipOne width={132} height={52} color={`#9CCE9B`} /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_header}`}
              >
                <Typography variant='h2'>Контурная пластика</Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_description}`}
              >
                <Typography variant='h5'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam necessitatibus earum quibusdam. Amet velit vel nemo
                  veritatis, modi nostrum perspiciatis ab blanditiis aliquid sit
                  dolor facilis dolores eius totam exercitationem! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aliquam
                  necessitatibus earum quibusdam. Amet velit vel nemo veritatis,
                  modi nostrum perspiciatis ab blanditiis aliquid sit dolor
                  facilis dolores eius totam exercitationem! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Aliquam necessitatibus
                  earum quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aliquam necessitatibus earum
                  quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem!
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_action}`}
              >
                <Button>
                  Подробнее <ArrowRightAltIcon />{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xm={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.wrapService}
          >
            <Grid container direction='column' className={classes.contService}>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_icon}`}
              >
                <Grid container className={classes.service_icon_warap_svg}>
                  <Grid item>
                    {/* <SvgLipTwo width={116} height={52} color={`#9CCE9B`} /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_header}`}
              >
                <Typography variant='h2'>Контурная пластика</Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_description}`}
              >
                <Typography variant='h5'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam necessitatibus earum quibusdam. Amet velit vel nemo
                  veritatis, modi nostrum perspiciatis ab blanditiis aliquid sit
                  dolor facilis dolores eius totam exercitationem! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aliquam
                  necessitatibus earum quibusdam. Amet velit vel nemo veritatis,
                  modi nostrum perspiciatis ab blanditiis aliquid sit dolor
                  facilis dolores eius totam exercitationem! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Aliquam necessitatibus
                  earum quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aliquam necessitatibus earum
                  quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem!
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_action}`}
              >
                <Button>
                  Подробнее <ArrowRightAltIcon />{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.rootItem}>
        <Grid container className={classes.contServiceRow} direction='row'>
          <Grid
            item
            xm={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.wrapService}
          >
            <Grid container direction='column' className={classes.contService}>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_icon}`}
              >
                <Grid container className={classes.service_icon_warap_svg}>
                  <Grid item>
                    {/* <SvgLipThree width={145} height={100} color={`#9CCE9B`} /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_header}`}
              >
                <Typography variant='h2'>Контурная пластика</Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_description}`}
              >
                <Typography variant='h5'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam necessitatibus earum quibusdam. Amet velit vel nemo
                  veritatis, modi nostrum perspiciatis ab blanditiis aliquid sit
                  dolor facilis dolores eius totam exercitationem! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aliquam
                  necessitatibus earum quibusdam. Amet velit vel nemo veritatis,
                  modi nostrum perspiciatis ab blanditiis aliquid sit dolor
                  facilis dolores eius totam exercitationem! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Aliquam necessitatibus
                  earum quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aliquam necessitatibus earum
                  quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem!
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_action}`}
              >
                <Button>
                  Подробнее <ArrowRightAltIcon />{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xm={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.wrapService}
          >
            <Grid container direction='column' className={classes.contService}>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_icon}`}
              >
                <Grid container className={classes.service_icon_warap_svg}>
                  <Grid item>
                    {/* <SvgLipFour width={116} height={52} color={`#9CCE9B`} /> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_header}`}
              >
                <Typography variant='h2'>Контурная пластика</Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_description}`}
              >
                <Typography variant='h5'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam necessitatibus earum quibusdam. Amet velit vel nemo
                  veritatis, modi nostrum perspiciatis ab blanditiis aliquid sit
                  dolor facilis dolores eius totam exercitationem! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aliquam
                  necessitatibus earum quibusdam. Amet velit vel nemo veritatis,
                  modi nostrum perspiciatis ab blanditiis aliquid sit dolor
                  facilis dolores eius totam exercitationem! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Aliquam necessitatibus
                  earum quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Aliquam necessitatibus earum
                  quibusdam. Amet velit vel nemo veritatis, modi nostrum
                  perspiciatis ab blanditiis aliquid sit dolor facilis dolores
                  eius totam exercitationem!
                </Typography>
              </Grid>
              <Grid
                item
                className={`${classes.item_article} ${classes.service_action}`}
              >
                <Button>
                  Подробнее <ArrowRightAltIcon />{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.rootItem}>
        <Grid
          container
          className={classes.contAction}
          justify='center'
          alignItems='center'
        >
          <Grid item className={classes.actionMore}>
            <Button>
              Смотеть больше <ArrowRightAltIcon />{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
