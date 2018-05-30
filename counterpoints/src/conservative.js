import React, { Component } from "react";

import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArticleTile from "./articleTile.js";
import ActionBar from "./actionbar.js";

const styles = theme => ({
  paper1: {
    height: 120,
    width: 800,
    padding: 8
  }
});

class ConservativeSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
      sources: [
        { abrv: "fox-news" },
        { abrv: "the-american-conservative" },
        { abrv: "breitbart-news" },
        { abrv: "the-wall-street-journal" },
        { abrv: "the-washington-times" },
        { abrv: "national-review" }
      ]
    };
  }

  refreshPage = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  componentDidMount() {
    let desiredArticles = [];

    for (let i = 0; i < this.state.sources.length; i++) {
      let outlet = this.state.sources[i];
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic.replace("#", "") +
            "&sources=" +
            outlet.abrv +
            "&apiKey=" +
            this.props.apiKey
        )
        .then(response => {
          let allOutletArt = response.data.articles;
          if (allOutletArt[0] === undefined || allOutletArt[1] === undefined) {
            return null;
          }
          desiredArticles.push(allOutletArt[0]);
          desiredArticles.push(allOutletArt[1]);
          console.log(desiredArticles);
          this.setState({ output: desiredArticles });
          console.log(this.state.output);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <ActionBar
          topic={this.props.topic}
          option={this.props.option}
          updateTopic={this.props.updateTopic}
          updateOption={this.props.updateOption}
          refreshPage={this.refreshPage}
        />
        <br />
        <center>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {this.state.output.map(article => (
                <ArticleTile article={article} />
              ))}
            </Grid>
          </Grid>
        </center>
      </div>
    );
  }
}
export default withStyles(styles)(ConservativeSources);
