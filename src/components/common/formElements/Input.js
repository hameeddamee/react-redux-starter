import React from "react";
import { Field } from "redux-form";

const ConfigInput = ({ input, type, placeholder, error, className }) => {
  // console.log("error:", error);
  return (
    <div className="form-group">
      <input
        {...input}
        type={type}
        className={className}
        placeholder={placeholder}
        required=""
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

const Input = props => {
  return <Field name={props.name} component={ConfigInput} props={props} />;
};

export default Input;
