import React from "react";
import { Link } from "react-router-dom";

import "./SignupFormComponent.css";

import Input from "../common/formElements/Input";

const SignupFormComponent = props => {
  const { handleSubmit, registerUser, history } = props;
  return (
    <form
      onSubmit={handleSubmit(registerUser.bind(this, history))}
      className="m-t"
    >
      <Input
        name="username"
        type="text"
        className="form-control"
        placeholder="Username"
      />
      <Input
        name="email"
        type="email"
        className="form-control"
        placeholder="Email"
      />
      <Input
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <Input
        name="phone"
        type="text"
        className="form-control"
        placeholder="Phone"
      />
      <button type="submit" className="btn btn-primary block full-width m-b">
        Signup
      </button>

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
