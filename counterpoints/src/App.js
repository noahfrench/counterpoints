import React from "react";
import "./App.css";
import GlobalSources from "./global.js";
import ConservativeSources from "./conservative.js";
import LiberalSources from "./liberal.js";

// Component that controls the Results page
class App extends React.Component {
  // Props passed down from Route.js: topic, option, updateTopic(newVal), updateOption(newVal)
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "73dc88fca73640e5a7ada3a24f39e3f2"
    };
  }

  // Render either GlobalSources, ConservativeSources, or LiberalSources depending on the user's choice
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
