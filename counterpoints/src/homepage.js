import React, { Component } from "react";
import "./homepage.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import FormLabel from "@material-ui/core/FormLabel";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <h1 className="App-title">COUNTERPOINTS</h1>
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
        <br />
        <br />
        <TextField
          margin="normal"
          onChange={e => this.props.updateTopic(e.target.value)}
          disabled={this.props.currentOption === ""}
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
      </div>
    );
  }
}
