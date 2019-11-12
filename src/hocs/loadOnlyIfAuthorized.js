import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const loadOnlyIfAuthorized = WrappedComponent => {
  const decoratedComponent = props => {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
      return <WrappedComponent props={props} />;
    }
    return <Redirect to={"/login"} />;
  };

  var mapStateToProps = function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps, null)(decoratedComponent);
};

export default loadOnlyIfAuthorized;
