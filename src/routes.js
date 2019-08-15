import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About"

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/registration" component={Registration} />
    <Route path="/profile" component={Profile} />
    <Route path="/about" component={About} />
  </Switch>
);
