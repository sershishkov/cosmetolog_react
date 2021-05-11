import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: 400,
    fontSize: '2rem',
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
              className={classes.root}
            >
              {alert.msg}
            </Alert>
          );
        })}
    </Fragment>
  );
};

export default AlertCustom;
