import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({
  id,
  path,
  exact,
  strict,
  isPublic,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  let navigate = useNavigate();
  const authorized = isPublic || isAuthenticated;
  return (
    <Route
      {...rest}
      render={props =>
        authorized ? (
          <Component {...props} />
        ) : (
          navigate('/login')
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthRoute);
