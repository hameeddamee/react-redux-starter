import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
      </Router>
    </Provider>
  );
}

export default App;
