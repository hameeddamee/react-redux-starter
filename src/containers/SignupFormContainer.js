import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import { registerUser, clearSignupError } from "../redux/actions/authActions";

import SignupFormComponent from "../components/Signup/SignupFormComponent";

let SignupFormContainer = reduxForm({
  form: "SignupForm"
})(SignupFormComponent);

let selector = formValueSelector("SignupForm");

let mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  passwordValue: selector(state, "password"),
  errorMsg: state.auth.errorMsg,
  isRegistering: state.auth.isRegistering
});

let mapDispatchToProps = {
  registerUser,
  clearSignupError
};

SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormContainer);

export default SignupFormContainer;
