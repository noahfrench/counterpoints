import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import GlobalSources from "./global.js";
import ConservativeSources from "./conservative.js";
import LiberalSources from "./liberal.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: [],
      word: "immigration",
      option: 1 //1=global, 2=conservative, 3=liberal
    };
  }
  render() {
    if (this.state.option === 1) {
      return (
        <MuiThemeProvider>
          <ul>
            <GlobalSources topic={this.state.word} />
          </ul>
        </MuiThemeProvider>
      );
    } else if (this.state.option === 2) {
      return (
        <MuiThemeProvider>
          <ul>
            <ConservativeSources topic={this.state.word} />
          </ul>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <ul>
            <LiberalSources topic={this.state.word} />
          </ul>
        </MuiThemeProvider>
      );
    }
  }
}

export default App;
