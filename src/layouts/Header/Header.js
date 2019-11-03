import React from "react";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <nav
        className="navbar navbar-default navbar-fixed-top navbar-expand-md"
        role="navigation"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            LOGISTICO
          </a>
          <div className="navbar-header page-scroll">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="nav-link page-scroll" href="#page-top">
                  Login
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
