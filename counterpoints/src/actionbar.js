import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./actionbar.css";

export default class ActionBar extends React.Component {
  handleHomeClick(e) {
    this.props.updateOption("");
    this.props.updateTopic("");
  }

  render() {
    return (
      <div className="ActionBar">
        <h1 className="ActionBar-title" onClick={e => this.handleHomeClick(e)}>
          <Link to="/Main">COUNTERPOINTS</Link>
        </h1>
        <div className="ActionBar-search-bar">
          <TextField
            margin="normal"
            defaultValue={this.props.topic}
            onChange={e => this.props.updateTopic(e.target.value)}
            disabled={this.props.option === ""}
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                this.props.refreshPage(ev);
              }
            }}
          />
          <IconButton
            disabled={this.props.topic === ""}
            onClick={e => this.props.refreshPage(e)}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <label className="ActionBar-label-text">Global</label>
        <Radio
          checked={this.props.option === "global"}
          name="global-button"
          value="global"
          onChange={e => this.props.updateOption(e.target.value)}
          label="global"
        />

        <label className="ActionBar-label-text">Liberal</label>
        <Radio
          checked={this.props.option === "liberal"}
          name="liberal-button"
          value="liberal"
          onChange={e => this.props.updateOption(e.target.value)}
          label="liberal"
        />
        <label className="ActionBar-label-text">Conservative</label>
        <Radio
          checked={this.props.option === "conservative"}
          name="conservative-button"
          value="conservative"
          onChange={e => this.props.updateOption(e.target.value)}
          label="conservative"
        />
      </div>
    );
  }
}
