import React, { Component } from "react";
  import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Lab1 from "../components/labs/Lab1";
import Lab2 from "../components/labs/Lab2";
import Lab3 from "../components/labs/Lab3";
import Lab4 from "../components/labs/Lab4";
import Result from "../components/Result";

export default class RouterURL extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/lab1" component={Lab1} />
          <Route exact path="/lab2" component={Lab2} />
          <Route exact path="/lab3" component={Lab3} />
          <Route exact path="/lab4" component={Lab4} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    );
  }
}
