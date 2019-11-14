import React from "react";
import { Link } from "react-router-dom";

import {
  required,
  email,
  matchingPassword,
  validatePassword
} from "../../helpers/formValidations.js";
import getPasswordStrength from "../../helpers/getPasswordStrength";

import Input from "../common/formElements/Input/Input";
import Button from "../common/Button";
import PhoneTextInput from "../common/formElements/PhoneInput/PhoneTextInput";

import "./SignupFormComponent.css";

const SignupFormComponent = props => {
  const {
    handleSubmit,
    pristine,
    invalid,
    registerUser,
    passwordValue,
    errorMsg,
    clearSignupError,
    isRegistering
  } = props;

  const handleChange = e => {
    if (errorMsg) clearSignupError();
  };

  return (
    <form onSubmit={handleSubmit(registerUser)} className="m-t">
      {errorMsg && (
        <div className="text-danger">
          <strong>{errorMsg}</strong>
        </div>
      )}
      <Input
        name="username"
        type="text"
        className="form-control"
        placeholder="Username"
        validate={[required]}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
        validate={[required, email]}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
        validate={[required, validatePassword]}
        info={passwordValue && getPasswordStrength(passwordValue)}
        onChange={handleChange}
      />
      <Input
        name="matchingPassword"
        type="password"
        className="form-control"
        placeholder="Confirm Password"
        validate={[required, matchingPassword]}
        onChange={handleChange}
      />
      <PhoneTextInput
        country="NG"
        name="telephone"
        className="form-control"
        asyncValidating={true}
        placeholder="Phone Number"
      />
      <Button
        type="submit"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || isRegistering || invalid}
      >
        {isRegistering ? "Processing..." : "Sign Up"}
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
