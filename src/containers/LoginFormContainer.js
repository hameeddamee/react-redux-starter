import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import LoginFormComponent from "../components/Login/LoginFormComponent";
import { loginUser } from "../redux/actions/authActions";

let mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

let mapDispatchToProps = {
  loginUser
};

let LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);

LoginFormContainer = reduxForm({
  form: "LoginForm"
})(LoginFormContainer);

export default LoginFormContainer;
