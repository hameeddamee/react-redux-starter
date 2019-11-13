import React from "react";
import { Link } from "react-router-dom";

import {
  required,
  email,
  matchingPassword,
  maxLength,
  validatePassword
} from "../../helpers/formValidations.js";
import getPasswordStrength from "../../helpers/getPasswordStrength";

import Input from "../common/formElements/Input";
import Button from "../common/Button";

import "./SignupFormComponent.css";

const SignupFormComponent = props => {
  const {
    handleSubmit,
    pristine,
    submitting,
    invalid,
    registerUser,
    passwordValue,
    errorMsg
  } = props;

  console.log("pristine", pristine);
  console.log("submitting", submitting);
  console.log("invalid", invalid);
  return (
    <form onSubmit={handleSubmit(registerUser)} className="m-t">
      {errorMsg && <small className="text-danger">{errorMsg}</small>}
      <Input
        name="username"
        type="text"
        className="form-control"
        placeholder="Username"
        validate={[required]}
      />
      <Input
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
        validate={[required, email]}
      />
      <Input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
        validate={[required, validatePassword]}
        info={passwordValue && getPasswordStrength(passwordValue)}
      />
      <Input
        name="matchingPassword"
        type="password"
        className="form-control"
        placeholder="Confirm Password"
        validate={[required, matchingPassword]}
      />
      <Input
        name="phone"
        type="text"
        className="form-control"
        placeholder="Phone"
        validate={[maxLength]}
      />
      <Button
        type="submit"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || submitting || invalid}
      >
        {submitting ? "Processing..." : "Sign Up"}
      </Button>

      <p className="text-muted text-center">
        <small>Already have an account?</small>
      </p>
      <Link className="btn btn-sm btn-white btn-block" to="/login">
        Login
      </Link>
    </form>
  );
};

export default SignupFormComponent;
