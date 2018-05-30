import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Homepage from "./homepage.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// Component that routes betwen the two main pages in the app: the homepage ("/Main") and the results page ("/Results")
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

  // Display the homepage ("/Main") by default.
  // Pass down the attributes of the current states to Homepage and App
  // Pass down a method to set the state to Homepage and App
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/Main" />
          <Route
            path="/Main"
            render={() => (
              <Homepage
                topic={this.state.topic}
                option={this.state.option}
                updateTopic={newVal => this.updateField("topic", newVal)}
                updateOption={newVal => this.updateField("option", newVal)}
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
