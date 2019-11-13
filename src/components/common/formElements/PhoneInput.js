import React from "react";
import { Field } from "redux-form";
import PhoneInput from "react-phone-number-input/native";
// import PhoneInput from "react-phone-number-input/react-responsive-ui";
import { getCountryCallingCode, parseNumber } from "libphonenumber-js/custom";
import metadata from "libphonenumber-js/metadata.min.json";
import { isValidPhone } from "../../../helpers/formValidations.js";
import FlagsComponent from "./PhoneInputFlags";

import config from "../../../config";

import "react-responsive-ui/style.css";
import "react-phone-number-input/style.css";
import "./PhoneInput.css";

const ConfigInput = props => {
  const {
    country,
    input,
    type,
    placeholder,
    className,
    info,
    meta: { dirty, error, warning }
  } = props;
  console.log("props", props);
  return (
    <div className="form-group">
      <PhoneInput
        name="telephone"
        flagComponent={FlagsComponent}
        international={false}
        displayInitialValueAsLocalNumber={true}
        country={country || config.global.phoneDefaultCountry}
        countries={config.global.phoneWhiteListCountries}
        className={className}
        placeholder={placeholder}
        type={type}
        metadata={metadata}
        {...input}
      />
      {info && <small className="text-info">{info}</small>}
      {dirty &&
        ((error && <small className="text-danger">{error}</small>) ||
          (warning && <small className="text-warning">{warning}</small>))}
    </div>
  );
};

const PhoneTextInput = props => {
  return <Field name={props.name} component={ConfigInput} {...props} />;
};

export default PhoneTextInput;
