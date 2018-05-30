import React from "react";
import "./homepage.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import { Link, Redirect } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

export default class Homepage extends React.Component {
  state = {
    enterPressed: false
  };

  render() {
    if (this.state.enterPressed === true) {
      return <Redirect to="/Results" />;
    }

    return (
      <div className="Homepage">
        <h1 className="App-title">COUNTERPOINTS</h1>
        <label>
          <b className="Instruct-text1">Show articles from:</b>
        </label>
        <label className="Label-text">Global</label>
        <Radio
          checked={this.props.currentOption === "global"}
          name="global-button"
          value="global"
          onChange={e => this.props.updateOption(e.target.value)}
          label="global"
        />
        <label className="Label-text">Liberal</label>
        <Radio
          checked={this.props.currentOption === "liberal"}
          name="liberal-button"
          value="liberal"
          onChange={e => this.props.updateOption(e.target.value)}
          label="liberal"
        />
        <label className="Label-text">Conservative</label>
        <Radio
          checked={this.props.currentOption === "conservative"}
          name="conservative-button"
          value="conservative"
          onChange={e => this.props.updateOption(e.target.value)}
          label="conservative"
        />
        <label>
          <b className="Instruct-text">sources...</b>
        </label>
        <br />
        <br />
        <TextField
          margin="normal"
          defaultValue={this.props.currentTopic}
          onChange={e => this.props.updateTopic(e.target.value)}
          disabled={this.props.currentOption === ""}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              this.setState(() => ({
                enterPressed: true
              }));
              ev.preventDefault();
            }
          }}
        />
        <Link
          to="/Results"
          onClick={e =>
            this.props.currentTopic === "" ? e.preventDefault() : true
          }
        >
          <IconButton disabled={this.props.currentTopic === ""}>
            <SearchIcon />
          </IconButton>
        </Link>
        <br />
        <a
          className="News-Link"
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NewsAPI.org
        </a>
        <br />
        <a
          className="News-Link"
          href="http://translate.yandex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Yandex.Translate
        </a>
      </div>
    );
  }
}
