import React from "react";
import "./App.css";
import GlobalSources from "./global.js";
import ConservativeSources from "./conservative.js";
import LiberalSources from "./liberal.js";

//https://translate.yandex.net/api/v1.5/tr.json/translate?text=immigration&lang=en-ar&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "f04b31d91c014184be4a785e6301b4bf"
    };
  }

  render() {
    if (this.props.option === "global") {
      return (
        <ul>
          <GlobalSources
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            apiKey={this.state.apiKey}
          />
        </ul>
      );
    } else if (this.props.option === "conservative") {
      return (
        <ul>
          <ConservativeSources
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            apiKey={this.state.apiKey}
          />
        </ul>
      );
    } else {
      return (
        <ul>
          <LiberalSources
            topic={this.props.topic}
            option={this.props.option}
            updateTopic={this.props.updateTopic}
            updateOption={this.props.updateOption}
            apiKey={this.state.apiKey}
          />
        </ul>
      );
    }
  }
}

export default App;
