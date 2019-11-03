import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import store from "./redux/store";

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import LoginPage from "./pages/Login/LoginPage";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div id="page-top" className="landing-page ">
            <Header />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={Profile} />
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
