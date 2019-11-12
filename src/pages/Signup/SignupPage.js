import React from "react";

import SignupFormContainer from "../../containers/SignupFormContainer";

const LoginPage = () => {
  return (
    <div className="loginColumns animated fadeInDown">
      <div className="row">
        <div className="col-md-6">
          <h2 className="font-bold">Welcome to LOGISTICO</h2>

          <p>
            Perfectly designed and precisely prepared logistics system which
            allows you to register, login, add addresses and request shipments
          </p>

          <p>
            Login to enjoy our wide range of unparralled logistics services at
            amazing deals
          </p>

          <p>
            If you're not already registered, sign up today by clicking the
            Create an Account button and provide us your username, email,
            password, and phone number
          </p>

          <p>
            <small>
              Ensure to remember your username, it would be required to login
              once registeration is done
            </small>
          </p>
        </div>
        <div className="col-md-6">
          <div className="ibox-content">
            <SignupFormContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
