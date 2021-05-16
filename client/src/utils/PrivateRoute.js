import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const PrivateRoute = ({ component: Component, state__auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !state__auth.isAuthenticated && !state__auth.loading__User ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  state__auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  state__auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
