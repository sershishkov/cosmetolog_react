import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../reduxStore/actions/user/auth';

import Logo from '../../images/logo/t_logo.png';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import InboxIcon from '@material-ui/icons/Inbox';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ContactsIcon from '@material-ui/icons/Contacts';
import MoreIcon from '@material-ui/icons/More';
import PhoneIcon from '@material-ui/icons/Phone';

import ExpandMore from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Popover from '@material-ui/core/Popover';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: 0,
  },
  Toolbar: {
    padding: 0,
  },
  appBarContainer: {
    backgroundColor: theme.palette.common.white,
  },
  rowTop: {
    backgroundColor: 'rgba(255, 253, 250, 0.24)',
    height: 88,
  },
  rowTop_wrapLeft: {
    height: '100%',
  },
  rowTop_containerLeft: {
    height: '100%',
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_menu_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo_img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& img': {},
  },

  logo_menu_drower_icon: {
    display: 'none',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  logo_menu__button: {
    fontSize: 28,
    color: theme.palette.common.colorGreen,
  },
  drawer2: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  nav: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  nav_containerLink: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nav_wrapLink: {},
  rowTop_wrapRight: {
    display: 'flex',
  },
  rowTop_containerRight: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  auth_logout: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  auth_login: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  auth_button: {
    fontSize: 20,
    color: theme.palette.common.colorGreen,
  },

  phoneMe: {},
  phoneMeContainer: {},
  phoneMe_phone: {
    '& span': {
      fontSize: 20,
      color: theme.palette.common.colorGreen,
    },
  },
  phoneMe_phoneSelect: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  phoneMe_phoneSelect__Select: {
    height: 30,
    fontSize: '1rem',
    border: `1px solid ${theme.palette.common.colorGreen}`,

    '&:hover, &:focus': {
      border: `2px solid ${theme.palette.common.colorGreen}`,
      backgroundColor: theme.palette.common.colorGreen,
      color: theme.palette.common.white,
    },
  },
  phoneMe_phoneWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  phoneMe_phoneButton: {
    backgroundColor: theme.palette.common.colorGreen,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.colorGreen,
      border: `1px solid ${theme.palette.common.colorGreen}`,
    },
  },

  rowBottom: {
    backgroundColor: 'transparent',
    height: 80,
  },

  listDrawer: {
    width: '95%',
    maxWidth: 400,
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
      width: 400,
      fontSize: '2rem',
    },
  },
  drawerItem: {
    width: '100%',
  },
  drawerItem_wrapIcon: {},
  drawerItem_icon: {
    fontSize: 28,
    color: theme.palette.common.colorGreen,
  },

  fixedButton: {
    position: 'fixed',
    width: 251,
    height: 64,
    right: -64,
    top: 379,
    background: '#E8E1D0',
    borderRadius: '16px 16px 0px 0px ',
    // display: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      fonFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: ' #928B78',
    },
    transform: 'rotate(-90deg)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  accordion: {
    // border: '1px solid #f00',
  },
  accordionSummary: {
    // border: '1px solid #0f0',
  },
  accordionSummaryHeading: {
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  accordionSummaryDetails: {
    // border: '1px solid #0f0',
  },
  listAccoprdion: {
    width: '100%',
    // border: '1px solid #00f',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  drawerItem_text: {
    color: theme.palette.common.colorGrey_9,
  },
  myAvatar: {
    width: 28,
    height: 28,
  },
}));

function MainHeader() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__auth = useSelector((state) => state.auth);
  const { user, isAuthenticated } = state__auth;

  const [selectedPhone, setSelectedPhone] = useState('380679173017');
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [fullSizeLogo, setFullSizeLogo] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  // console.log(user);

  const phoneChangeHandler = (event) => {
    setSelectedPhone(event.target.value);
  };

  const my_drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding className={classes.listDrawer}>
          {!isAuthenticated && (
            <ListItem
              component={Link}
              href='/login'
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
              className={classes.drawerItem}
            >
              <Grid container justify='flex-start' alignItems='center'>
                <Grid item>
                  <ListItemIcon className={classes.drawerItem_wrapIcon}>
                    <ExitToAppIcon className={classes.drawerItem_icon} />
                  </ListItemIcon>
                </Grid>
                <Grid item>
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem_text}
                  >
                    Вход
                  </ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          )}

          {isAuthenticated && (
            <ListItem
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                dispatch(logout());
              }}
              className={classes.drawerItem}
            >
              <Grid container justify='flex-start' alignItems='center'>
                <Grid item>
                  <ListItemIcon className={classes.drawerItem_wrapIcon}>
                    <DirectionsRunIcon className={classes.drawerItem_icon} />
                  </ListItemIcon>
                </Grid>
                <Grid item>
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem_text}
                  >
                    Выход
                  </ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          )}

          {isAuthenticated && (
            <ListItem
              component={Link}
              href='/my-office'
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
              className={classes.drawerItem}
            >
              <Grid container justify='flex-start' alignItems='center'>
                <Grid item>
                  <ListItemIcon className={classes.drawerItem_wrapIcon}>
                    {user && user.myAvatar && (
                      <Avatar
                        alt='myAvatar'
                        src={
                          user.myAvatar
                            ? user.myAvatar
                            : '/uploads/default_user.jpg'
                        }
                        className={classes.myAvatar}
                      />
                    )}

                    {/* <DirectionsRunIcon className={classes.drawerItem_icon} /> */}
                  </ListItemIcon>
                </Grid>
                <Grid item>
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem_text}
                  >
                    Мой кабинет
                  </ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          )}

          <ListItem
            component={Link}
            href='/services'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <WorkIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Услуги
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem
            component={Link}
            href='/teaching'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <MoreIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Обучение
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem
            component={Link}
            href='/about'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <InboxIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Обо мне
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem
            component={Link}
            href='/reviews'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <RateReviewIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Отзывы
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem
            component={Link}
            href='/useful-info'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <InfoIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Полезная информация
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem
            component={Link}
            href='/contacts'
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Grid container justify='flex-start' alignItems='center'>
              <Grid item>
                <ListItemIcon className={classes.drawerItem_wrapIcon}>
                  <ContactsIcon className={classes.drawerItem_icon} />
                </ListItemIcon>
              </Grid>
              <Grid item>
                <ListItemText
                  disableTypography
                  className={classes.drawerItem_text}
                >
                  Контакты
                </ListItemText>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        {user && user.role === 'admin' && (
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`user-admin-free-content`}
              id={`user-admin-free-header`}
              className={classes.accordionSummary}
            >
              <Typography className={classes.accordionSummaryHeading}>
                Админка
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionSummaryDetails}>
              <List disablePadding className={classes.listAccoprdion}>
                <ListItem
                  component={Link}
                  href='/admin/users'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Клиенты
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem
                  component={Link}
                  href='/admin/services'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Услуги
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem
                  component={Link}
                  href='/admin/procedures'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Процедуры
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem
                  component={Link}
                  href='/admin/drugs'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Лекарства
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem
                  component={Link}
                  href='/admin/keywords'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Ключевые слова
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem
                  component={Link}
                  href='/admin/faqs'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Вопросы и Ответы
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                {/* <ListItem
                  component={Link}
                  href='/admin/comments'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Комментарии
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem> */}

                <ListItem
                  component={Link}
                  href='/admin/articles'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Статьи
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>

                {/* <ListItem
                  component={Link}
                  href='/admin/reviews'
                  divider
                  button
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  className={classes.drawerItem}
                >
                  <Grid container justify='flex-start' alignItems='center'>
                    <Grid item>
                      <ListItemIcon className={classes.drawerItem_wrapIcon}>
                        <ContactsIcon className={classes.drawerItem_icon} />
                      </ListItemIcon>
                    </Grid>
                    <Grid item>
                      <ListItemText
                        disableTypography
                        className={classes.drawerItem_text}
                      >
                        Отзывы
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItem> */}
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </SwipeableDrawer>

      <Tooltip title='Меню'>
        <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon className={classes.logo_menu__button} />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFullSizeLogo(false);
    });
  }, []);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.root}>
          <Toolbar className={classes.Toolbar}>
            <Grid container className={classes.appBarContainer}>
              <div className={classes.fixedButton}>
                <Link href='/'>Записаться на прием</Link>
              </div>
              <Grid item container className={classes.rowTop}>
                <Grid
                  item
                  lg={9}
                  md={9}
                  sm={8}
                  xs={8}
                  className={classes.rowTop_wrapLeft}
                >
                  <Grid container className={classes.rowTop_containerLeft}>
                    <Grid
                      item
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className={classes.logo}
                    >
                      <Grid container className={classes.logo_menu_container}>
                        <Grid
                          item
                          container
                          className={classes.logo_menu_drower_icon}
                          sm={6}
                          xs={6}
                        >
                          {my_drawer}
                        </Grid>
                        <Grid
                          item
                          className={classes.logo_img}
                          lg={12}
                          md={12}
                          sm={6}
                          xs={6}
                        >
                          <Link href='/' className={classes.logo_Link}>
                            <img
                              src={Logo}
                              alt='logo'
                              style={{
                                height: fullSizeLogo ? 120 : 88,
                                width: fullSizeLogo ? 120 : 88,
                              }}
                            />
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item lg={10} md={10} className={classes.nav}>
                      <Grid container className={classes.nav_containerLink}>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/services'>
                            <Typography variant='h5'>Услуги</Typography>
                          </Link>
                        </Grid>

                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/teaching'>
                            <Typography variant='h5'>Обучение</Typography>
                          </Link>
                        </Grid>

                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/about'>
                            <Typography variant='h5'>Обо мне</Typography>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/reviews'>
                            <Typography variant='h5'>Отзывы</Typography>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/useful-info'>
                            <Typography variant='h5'>
                              Полезная информация
                            </Typography>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/contacts'>
                            <Typography variant='h5'>Контакты</Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={4}
                  className={classes.rowTop_wrapRight}
                >
                  <Grid container className={classes.rowTop_containerRight}>
                    {user && user.role === 'admin' && (
                      <Grid item className={classes.drawer2}>
                        {my_drawer}
                      </Grid>
                    )}

                    {!isAuthenticated && (
                      <Grid item className={classes.auth_login}>
                        <Tooltip title='Вход'>
                          <Link href='/login'>
                            <DirectionsRunIcon
                              className={classes.auth_button}
                            />
                          </Link>
                        </Tooltip>
                      </Grid>
                    )}
                    {isAuthenticated && (
                      <Grid item className={classes.auth_login}>
                        {/* <Tooltip title='Выход'> */}
                        <IconButton
                          aria-describedby={popoverId}
                          onClick={handlePopoverClick}
                          // onClick={() => {
                          //   dispatch(logout());
                          // }}
                        >
                          <Avatar
                            alt='myAvatar'
                            src={
                              user.myAvatar
                                ? user.myAvatar
                                : '/uploads/default_user.jpg'
                            }
                            className={classes.myAvatar}
                          />
                          {/* <DirectionsRunIcon
                              className={classes.auth_button}
                            /> */}
                        </IconButton>
                        {/* </Tooltip> */}
                        <Popover
                          id={popoverId}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handlePopoverClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <List disablePadding className={classes.listDrawer}>
                            <ListItem
                              component={Link}
                              href='/my-office'
                              divider
                              button
                              className={classes.drawerItem}
                            >
                              <Grid
                                container
                                justify='flex-start'
                                alignItems='center'
                              >
                                <Grid item>
                                  <ListItemIcon
                                    className={classes.drawerItem_wrapIcon}
                                  >
                                    <ExitToAppIcon
                                      className={classes.drawerItem_icon}
                                    />
                                  </ListItemIcon>
                                </Grid>
                                <Grid item>
                                  <ListItemText
                                    disableTypography
                                    className={classes.drawerItem_text}
                                  >
                                    Мой кабинет
                                  </ListItemText>
                                </Grid>
                              </Grid>
                            </ListItem>
                            <ListItem
                              divider
                              button
                              onClick={() => {
                                dispatch(logout());
                              }}
                              className={classes.drawerItem}
                            >
                              <Grid
                                container
                                justify='flex-start'
                                alignItems='center'
                              >
                                <Grid item>
                                  <ListItemIcon
                                    className={classes.drawerItem_wrapIcon}
                                  >
                                    <ExitToAppIcon
                                      className={classes.drawerItem_icon}
                                    />
                                  </ListItemIcon>
                                </Grid>
                                <Grid item>
                                  <ListItemText
                                    disableTypography
                                    className={classes.drawerItem_text}
                                  >
                                    Выход
                                  </ListItemText>
                                </Grid>
                              </Grid>
                            </ListItem>
                          </List>
                        </Popover>
                      </Grid>
                    )}

                    {/* {user && (
                      <Grid item className={classes.auth_logout}>
                        <div>
                          <Avatar src={user.picture} alt={user.name} />
                          <Typography variant='body1'>{user.name}</Typography>

                          <Link href='/api/auth/logout'>
                            
                              <DirectionsRunIcon
                                className={classes.auth_button}
                              />
                            
                          </Link>
                        </div>
                      </Grid>
                    )} */}

                    <Grid
                      item
                      className={classes.phoneMe_phone}
                      style={{
                        display:
                          user && user.role === 'admin' ? 'none' : 'flex',
                      }}
                    >
                      <Link href={`tel:+${selectedPhone}`}>
                        <PhoneIcon className={classes.drawerItem_icon} />
                      </Link>
                    </Grid>

                    <Grid
                      item
                      className={classes.phoneMe_phoneSelect}
                      style={{
                        display:
                          user && user.role === 'admin' ? 'none' : 'flex',
                      }}
                    >
                      <Select
                        variant='outlined'
                        labelId='phone-select-label'
                        id='phone-select'
                        value={selectedPhone}
                        onChange={phoneChangeHandler}
                        className={classes.phoneMe_phoneSelect__Select}
                      >
                        <MenuItem value={380679173017}>
                          (067) 917-30-17
                        </MenuItem>
                        <MenuItem selected value={380679173030}>
                          (067) 917-30-30
                        </MenuItem>
                        <MenuItem selected value={380679173040}>
                          (067) 917-30-40
                        </MenuItem>
                      </Select>
                    </Grid>

                    <Grid
                      item
                      className={classes.phoneMe_phoneWrap}
                      style={{
                        display:
                          user && user.role === 'admin' ? 'none' : 'flex',
                      }}
                    >
                      <Button className={classes.phoneMe_phoneButton}>
                        Позвони мне
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                container
                className={classes.rowBottom}
                style={{ display: fullSizeLogo ? 'block' : 'none' }}
              ></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default MainHeader;
