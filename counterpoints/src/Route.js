import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Homepage from "./homepage.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

export default class Route extends Component {
  constructor() {
    this.state = {
      topic: "",
      option: 1
    };
  }
  updateField(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/Main" />
          <Route
            path="/Main"
            render={() => (
              <Homepage
                updateTopic={newVal => this.updateField("topic", newVal)}
                updateOption={newVal => this.updateField("option", newVal)}
              />
            )}
          />
          <Route path="/Results" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
