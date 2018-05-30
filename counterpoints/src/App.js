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
<<<<<<< HEAD
      apiKey: "bd4fea718c13431f8e8e138aa47e3561"
=======
      apiKey: "f04b31d91c014184be4a785e6301b4bf"
>>>>>>> 49e789d02a5b8faf8415e4b3121b540e6ac4d834
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
