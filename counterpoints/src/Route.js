import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Homepage from "./homepage.js";
import ActionBar from "./actionbar.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

export default class RouteA extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      option: ""
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
                currentOption={this.state.option}
                currentTopic={this.state.topic}
              />
            )}
          />
          <Route
            path="/Results"
            render={() => (
              <App
                topic={this.state.topic}
                option={this.state.option}
                updateTopic={newVal => this.updateField("topic", newVal)}
                updateOption={newVal => this.updateField("option", newVal)}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
