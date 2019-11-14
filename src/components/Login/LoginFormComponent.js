import React from "react";
import { Link } from "react-router-dom";

import { required, email } from "../../helpers/formValidations.js";

import Input from "../common/formElements/Input/Input";
import Button from "../common/Button";

import "./LoginFormComponent.css";

const LoginFormComponent = props => {
  const {
    handleSubmit,
    loginUser,
    pristine,
    isRegistering,
    invalid,
    errorMsg,
    clearSignupError
  } = props;

  const handleChange = e => {
    if (errorMsg) clearSignupError();
  };

  return (
    <form onSubmit={handleSubmit(loginUser)} className="m-t">
      {errorMsg && (
        <div className="text-danger">
          <strong>{errorMsg}</strong>
        </div>
      )}
      <Input
        name="identifier"
        type="email"
        className="form-control"
        placeholder="Username"
        validate={[required, email]}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
        validate={[required]}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="btn btn-primary block full-width m-b"
        disabled={pristine || isRegistering || invalid}
      >
        {isRegistering ? "Processing..." : "Login"}
      </Button>

      <Link to="/forgot-password">
        <small>Forgot password?</small>
      </Link>

      <p className="text-muted text-center">
        <small>Do not have an account?</small>
      </p>
      <Link className="btn btn-sm btn-white btn-block" to="/signup">
        Create an account
      </Link>
    </form>
  );
};

export default LoginFormComponent;
