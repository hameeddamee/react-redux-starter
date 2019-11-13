import React, { Fragment } from "react";

const Button = ({ type, children, className, disabled }) => {
  return (
    <Fragment>
      <button type={type} className={className} disabled={disabled}>
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
