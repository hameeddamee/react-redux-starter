import React from "react";
import { Link } from "react-router-dom";

import "./LoginFormComponent.css";

import Input from "../common/formElements/Input";

const LoginFormComponent = props => {
  const {
    handleSubmit,
    loginUser
    // pristine,
    // submitting,
    // invalid,
    // passwordValue,
    // errorMsg
  } = props;
  return (
    <form onSubmit={handleSubmit(loginUser)} className="m-t">
      <Input
        name="identifier"
        type="email"
        className="form-control"
        placeholder="Username"
      />
      <Input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <button type="submit" className="btn btn-primary block full-width m-b">
        Login
      </button>

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
