import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GlobalSources from "./global.js";
import ConservativeSources from "./conservative.js";
import LiberalSources from "./liberal.js";
import ActionBar from "./actionbar.js";

//https://translate.yandex.net/api/v1.5/tr.json/translate?text=immigration&lang=en-ar&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: []
    };
  }

  refreshPage = e => {
    e.preventDefault();
    this.forceUpdate();
    console.log(this.props.topic);
    console.log("Page is refreshed!");
  };

  render() {
    if (this.props.option === "global") {
      return (
        <div>
          <ActionBar
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            refreshPage={this.refreshPage}
          />
          <ul>
            <GlobalSources topic={this.props.topic} />
          </ul>
        </div>
      );
    } else if (this.props.option === "conservative") {
      return (
        <div>
          <ActionBar
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            refreshPage={this.refreshPage}
          />
          <ul>
            <ConservativeSources topic={this.props.topic} />
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ActionBar
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            refreshPage={this.refreshPage}
          />
          <ul>
            <LiberalSources topic={this.props.topic} />
          </ul>
        </div>
      );
    }
  }
}

export default App;
