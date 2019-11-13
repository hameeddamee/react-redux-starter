import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import get from "lodash/get";

import SignupFormComponent from "../components/Signup/SignupFormComponent";

import { registerUser } from "../redux/actions/authActions";

let SignupFormContainer = reduxForm({
  form: "SignupForm"
})(SignupFormComponent);

let selector = formValueSelector("SignupForm");

let mapStateToProps = function mapStateToProps(state) {
  return Object.assign({
    isAuthenticated: state.auth.isAuthenticated,
    passwordValue: selector(state, "password"),
    errorMsg: get(state, "form.signup.error", false)
  });
};

let mapDispatchToProps = {
  registerUser
};

SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormContainer);

export default SignupFormContainer;
