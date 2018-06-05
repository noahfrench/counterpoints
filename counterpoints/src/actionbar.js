import React from "react";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./actionbar.css";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#E10050"
    }
  }
});
/*
Implentation for the "bar" component that appears at the top of the results page.
Contains a logo that links back to the homepage, a search field, search button, and 
Radio buttons to switch between the three news outlet lists.
*/
class ActionBar extends React.Component {
  // If the "home button" is clicked, reset the topic and option (global/liberal/conservative)
  handleHomeClick(e) {
    this.props.updateOption("");
    this.props.updateTopic("");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="ActionBar">
        <h1 className="ActionBar-title">
          <Link to="/main" onClick={e => this.handleHomeClick(e)}>
            COUNTERPOINTS
          </Link>
        </h1>
        <div className="ActionBar-search-bar">
          <Input
            classes={{
              underline: classes.cssUnderline
            }}
            margin="normal"
            defaultValue={this.props.topic}
            onChange={e => this.props.updateTopic(e.target.value)}
            disabled={this.props.option === ""}
            onKeyPress={ev => {
              if (ev.key === "Enter") {
                this.props.changeTheRender(ev);
                this.props.refreshPage(ev);
              }
            }}
          />
          <IconButton
            disabled={this.props.topic === ""}
            onClick={e => {
              this.props.changeTheRender(e);
              this.props.refreshPage(e);
            }}
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
export default withStyles(styles)(ActionBar);
