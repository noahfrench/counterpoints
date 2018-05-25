import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <center>
          COUNTERPOINTS
          <br />
          <Radio
            checked={this.props.currentOption === "global"}
            name="global-button"
            value="global"
            onChange={e => this.props.updateOption(e.target.value)}
          />
          <Radio
            checked={this.props.currentOption === "liberal"}
            name="liberal-button"
            value="liberal"
            onChange={e => this.props.updateOption(e.target.value)}
          />
          <Radio
            checked={this.props.currentOption === "conservative"}
            name="conservative-button"
            value="conservative"
            onChange={e => this.props.updateOption(e.target.value)}
          />
          <br />
          <TextField
            margin="normal"
            onChange={e => this.props.updateTopic(e.target.value)}
          />
          <Link to={"/Results"}>
            <Button variant="raised" color="primary">
              search
            </Button>
          </Link>
        </center>
      </div>
    );
  }
}
