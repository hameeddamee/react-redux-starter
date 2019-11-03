import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <nav
        className="navbar navbar-default navbar-fixed-top navbar-expand-md"
        role="navigation"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            LOGISTICO
          </Link>
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
                <Link className="nav-link page-scroll" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
