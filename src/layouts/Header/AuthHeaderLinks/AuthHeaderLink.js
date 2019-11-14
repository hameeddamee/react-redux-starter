import React, { Fragment } from "react";

import Button from "../../../components/common/Button";

const AuthHeaderLink = ({ onClickHandler }) => {
  return (
    <Fragment>
      <li>
        <Button className="nav-link page-scroll" onClick={onClickHandler}>
          Logout
        </Button>
      </li>
    </Fragment>
  );
};

export default AuthHeaderLink;
