import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    // margin: 'auto',
    left: 'calc(50% - 100px)',
    top: 30,
    width: 400,
    fontSize: '2rem',
    zIndex: 1501,
  },
}));

const AlertCustom = () => {
  const classes = useStyles();
  const arrayAllerts = useSelector((state) => state.alerts.arrayAllerts);

  return (
    <Fragment>
      {arrayAllerts &&
        arrayAllerts.length > 0 &&
        arrayAllerts.map((alert) => {
          return (
            <Alert
              key={alert.id}
              severity={alert.alertType}
              className={`${classes.root} `}
              // style={{ top: alert.top }}
            >
              {alert.msg}
            </Alert>
          );
        })}
    </Fragment>
  );
};

export default AlertCustom;
