import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const redirectIfAuthorized = (WrappedComponent, redirectPath) => {
  const decoratedComponent = props => {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
      return <Redirect to={redirectPath} />;
    }
    return <WrappedComponent props={props} />;
  };

  var mapStateToProps = function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(
    mapStateToProps,
    null
  )(decoratedComponent);
};

export default redirectIfAuthorized;
