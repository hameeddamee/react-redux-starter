import React from "react";
import { Field } from "redux-form";

const ConfigInput = ({
  input,
  type,
  placeholder,
  className,
  info,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="form-group">
      <input
        {...input}
        type={type}
        className={className}
        placeholder={placeholder}
        required=""
      />
      {info && <small className="text-warning">{info}</small>}
      {touched &&
        ((error && <small className="text-danger">{error}</small>) ||
          (warning && <small>{warning}</small>))}
    </div>
  );
};

const Input = props => {
  return <Field name={props.name} component={ConfigInput} {...props} />;
};

export default Input;
