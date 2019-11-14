import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../redux/actions/authActions";

import AuthHeaderLink from "./AuthHeaderLinks/AuthHeaderLink";
import GuestHeaderLink from "./GuestHeaderLinks/GuestHeaderLink";

const Header = ({ isAuthenticated, logoutUser }) => {
  const links = isAuthenticated ? (
    <AuthHeaderLink onClickHandler={logoutUser} />
  ) : (
    <GuestHeaderLink />
  );

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
            <ul className="nav navbar-nav navbar-right">{links}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
