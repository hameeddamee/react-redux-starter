import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GuestHeaderLink = () => {
  return (
    <Fragment>
      <li>
        <Link className="nav-link page-scroll" to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link className="nav-link page-scroll" to="/signup">
          Signup
        </Link>
      </li>
    </Fragment>
  );
};

export default GuestHeaderLink;
