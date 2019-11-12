import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import store from "./redux/store";
import redirectIfAuthorized from "./hocs/redirectIfAuthorized";
import loadOnlyIfAuthorized from "./hocs/loadOnlyIfAuthorized";
import config from "./config";
import { checkAuthState } from "./redux/actions/authActions";

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SignupPage from "./pages/Signup/SignupPage";

export const App = () => {
  useEffect(() => {
    store.dispatch(checkAuthState());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div id="page-top" className="landing-page ">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                component={redirectIfAuthorized(
                  LoginPage,
                  config.Routes.profile
                )}
              />
              <Route
                exact
                path="/login"
                component={redirectIfAuthorized(
                  LoginPage,
                  config.Routes.profile
                )}
              />
              <Route
                exact
                path="/signup"
                component={redirectIfAuthorized(
                  SignupPage,
                  config.Routes.profile
                )}
              />
            </Switch>
            <Route
              exact
              path="/profile"
              component={loadOnlyIfAuthorized(ProfilePage)}
            />
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
