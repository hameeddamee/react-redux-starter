import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import SignupFormComponent from "../components/Signup/SignupFormComponent";
import { registerUser } from "../redux/actions/authActions";

let mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

let mapDispatchToProps = {
  registerUser
};

let SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);

SignupFormContainer = reduxForm({
  form: "SignForm"
})(SignupFormContainer);

export default SignupFormContainer;
