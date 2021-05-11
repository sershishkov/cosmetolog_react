import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Icon from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';
import KievstarLogo from '../../images/footer/kievstar.png';
import LifeCellLogo from '../../images/footer/lifecell_logo.png';
import VodofoneLogo from '../../images/footer/vodafone-sim.png';
import FootterMap from '../../images/footer/map.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth: theme.breakpoints.width('xl'),
    backgroundColor: theme.palette.common.white,
    height: 264,
    padding: 0,
    marginTop: '2rem',
  },
  footerContainer: {
    margin: 'auto',
    height: '100%',
    maxWidth: theme.breakpoints.width('lg'),
    backgroundColor: theme.palette.common.white,
  },
  footer_Item_left: {
    height: '100%',
    width: '100%',
  },
  footer_Item_right: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  footer_contContacts: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },

  footer_contContacts_phones: {},
  footer_contContacts_phonesCont: {},
  footer_contContacts_phonesCont_item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& img': {
      width: 20,
      height: 20,
      marginRight: 10,
      marginLeft: 10,
    },
  },
  drawerItem_icon: {
    fontSize: 20,
    color: theme.palette.common.colorGreen,
  },
  wrapSocial_icons: {
    width: '100%',
  },
  contSocial_icons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  icon_item: {
    margin: '0px 10px',
  },

  footer_contMap: {
    height: '100%',
  },
  footer_contMap_wrapImg: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  footer_contMap_wrapImg_img: {
    width: '100%',
    height: '100%',
  },
}));

function MainFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.footerContainer}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xm={12}
          className={classes.footer_Item_left}
        >
          <Grid container className={classes.footer_contContacts}>
            <Grid item>
              <Typography variant='h2'>Контакты</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                Адрес:г.Запорожье,ул. Лесная,33б, оф.45
              </Typography>
            </Grid>
            <Grid item className={classes.footer_contContacts_phones}>
              <Grid
                container
                className={classes.footer_contContacts_phonesCont}
              >
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src={KievstarLogo} alt='kievstar' />
                  <Typography variant='body1' component='span'>
                    380679173017
                  </Typography>
                </Grid>
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src={LifeCellLogo} alt='lifecell' />
                  <Typography variant='body1' component='span'>
                    380639173017
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.footer_contContacts_phones}>
              <Grid
                container
                className={classes.footer_contContacts_phonesCont}
              >
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <PhoneIcon className={classes.drawerItem_icon} />
                  <Typography variant='body1' component='span'>
                    380679173017
                  </Typography>
                </Grid>
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src={VodofoneLogo} alt='vodofone' />
                  <Typography variant='body1' component='span'>
                    380639173017
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.wrapSocial_icons}>
              <Grid container className={classes.contSocial_icons}>
                <Grid item className={classes.icon_item}>
                  <Link href='/'>
                    <Icon
                      className={`fab fa-facebook-square ${classes.drawerItem_icon}`}
                    />
                  </Link>
                </Grid>
                <Grid item className={classes.icon_item}>
                  <Link href='/'>
                    <Icon
                      className={`fab fa-viber ${classes.drawerItem_icon}`}
                    />
                  </Link>
                </Grid>
                <Grid item className={classes.icon_item}>
                  <Link href='/'>
                    <Icon
                      className={`fab fa-telegram-plane ${classes.drawerItem_icon}`}
                    />
                  </Link>
                </Grid>
                <Grid item className={classes.icon_item}>
                  <Link href='/'>
                    <Icon
                      className={`fab fa-whatsapp ${classes.drawerItem_icon}`}
                    />
                  </Link>
                </Grid>
                <Grid item className={classes.icon_item}>
                  <Link href='/'>
                    <Icon className={`fab fa-vk ${classes.drawerItem_icon}`} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xm={12}
          className={classes.footer_Item_right}
        >
          <Grid container className={classes.footer_contMap}>
            <Grid item className={classes.footer_contMap_wrapImg}>
              <img
                src={FootterMap}
                alt='map'
                className={classes.footer_contMap_wrapImg_img}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default MainFooter;
