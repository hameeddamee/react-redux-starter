import React, { useState, useEffect } from "react";
import { Field } from "redux-form";
import PhoneInput from "react-phone-number-input/native";
import { getCountryCallingCode, parseNumber } from "libphonenumber-js/custom";
import metadata from "libphonenumber-js/metadata.min.json";

import { isValidPhone } from "../../../../helpers/formValidations.js";
import config from "../../../../config";

import FlagsComponent from "./PhoneInputFlags";

import "react-phone-number-input/style.css";
import "./PhoneInput.css";

const ConfigInput = props => {
  let {
    country,
    input,
    type,
    placeholder,
    className,
    info,
    name,
    meta: { dirty, error, warning }
  } = props;

  const phoneValue = input.value;
  const [phone, setPhone] = useState("");
  const [focused, setFocused] = useState(false);
  const [countryPrefix, setCountryPrefix] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [errorMsg, setErrorMsg] = useState(error);

  const onChangeHandler = (value, phone) => {
    const onChange = input.onChange;

    let meta = {
      countryPrefix: countryPrefix,
      countryCode: countryCode,
      noPrefixPhone: phone && phone.replace("+" + countryPrefix, "")
    };

    let inputError = value ? isValidPhone(value) : undefined;
    error = inputError ? inputError : undefined;
    setErrorMsg(error);
    onChange(value, phone, meta, name);
  };

  const onCountryChangeHandler = countryCode => {
    let countryPrefixVal = getCountryCallingCode(countryCode, metadata);
    setCountryPrefix(countryPrefixVal);
    setCountryCode(countryCode);
  };

  const onFocusHandler = () => {
    setFocused(true);
  };

  const onBlurHandler = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (phoneValue) {
      let parsed = parseNumber(phoneValue, metadata);

      if (parsed.country) {
        setCountryCode(parsed.country);
        setCountryPrefix(
          countryCode && getCountryCallingCode(countryCode, metadata)
        );
        setPhone(phoneValue);
      }
    }
  }, [phoneValue, countryCode]);

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
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onCountryChange={onCountryChangeHandler}
        onChange={onChangeHandler}
        value={phone}
      />
      {info && focused && <small className="text-info">{info}</small>}
      {dirty &&
        ((errorMsg && <small className="text-danger">{errorMsg}</small>) ||
          (warning && <small className="text-warning">{warning}</small>))}
    </div>
  );
};

const PhoneTextInput = props => {
  return <Field name={props.name} component={ConfigInput} {...props} />;
};

export default PhoneTextInput;
