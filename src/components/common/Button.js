import React, { Fragment } from "react";

const Button = props => {
  const { type, children, className, disabled } = props;
  return (
    <Fragment>
      <button type={type} className={className} disabled={disabled} {...props}>
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
