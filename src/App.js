import React from "react";
import "./App.css";
import Home from "./home";
import Connect from "./connect";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Link to="/">
            <h1> Home </h1>
          </Link>
          <Link to="/connect">
            <h1> Connect </h1>
          </Link>
        </div>
        <Switch>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
