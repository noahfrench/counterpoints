import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Homepage from "./homepage.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

export default class Route extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/Main" />
          <Route path="/Main" component={Homepage} />
          <Route path="/Results" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
