import React from "react";

import { getCurrentYear } from "../../helpers/dateHelper";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-left">Copyright Logistico Company</div>
          <div className="col-md-6 text-right">&copy; {getCurrentYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
