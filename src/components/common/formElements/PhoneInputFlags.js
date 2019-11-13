import React from "react";
import Icon from "./Icon";

const PhoneInputFlags = props => {
  let country = props.country;
  let flagURL = `${props.flagsPath}${country.toLowerCase()}.svg`;

  return <Icon src={flagURL} />;
};

export default PhoneInputFlags;
