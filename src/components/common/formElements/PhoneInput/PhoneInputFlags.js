import React from "react";
import Icon from "../../Icon/Icon";

const PhoneInputFlags = props => {
  const { country, flagsPath } = props;
  let flagURL = `${flagsPath}${country.toLowerCase()}.svg`;

  return <Icon src={flagURL} />;
};

export default PhoneInputFlags;
