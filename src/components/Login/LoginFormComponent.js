import React from "react";

import "./LoginFormComponent.css";

import Input from "../common/formElements/Input";

const LoginFormComponent = props => {
  const { handleSubmit, loginUser } = props;
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

      <a href="#">
        <small>Forgot password?</small>
      </a>

      <p className="text-muted text-center">
        <small>Do not have an account?</small>
      </p>
      <a className="btn btn-sm btn-white btn-block" href="register.html">
        Create an account
      </a>
    </form>
  );
};

export default LoginFormComponent;
