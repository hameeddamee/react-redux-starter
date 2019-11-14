import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { loginUser, clearSignupError } from "../redux/actions/authActions";

import LoginFormComponent from "../components/Login/LoginFormComponent";

let LoginFormContainer = reduxForm({
  form: "LoginForm"
})(LoginFormComponent);

let mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMsg: state.auth.errorMsg,
  isRegistering: state.auth.isRegistering
});

let mapDispatchToProps = {
  loginUser,
  clearSignupError
};

LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

export default LoginFormContainer;
