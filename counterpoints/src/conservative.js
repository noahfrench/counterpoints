import React, { Component } from "react";

import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";
import ArticleTile from "./articleTile.js";

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
      middle: [],
      sources: [
        { abrv: "fox-news" },
        { abrv: "the-american-conservative" },
        { abrv: "breitbart-news" },
        { abrv: "the-wall-street-journal" },
        { abrv: "the-washington-times" }
      ]
    };
  }

  componentDidMount() {
    let want = [];
    for (let i = 0; i < 5; i++) {
      let outlet = this.state.sources[i];
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=" +
            outlet.abrv +
            "&apiKey=f04b31d91c014184be4a785e6301b4bf"
        )
        .then(response => {
          let arr1 = response.data.articles;
          if (arr1[0] === undefined || arr1[1] === undefined) {
            return null;
          }
          want.push(arr1[0]);
          want.push(arr1[1]);
          console.log(want);
          this.setState({ middle: want });
          console.log(this.state.middle);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <center>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {this.state.middle.map(article => (
              <ArticleTile article={article} />
            ))}
          </Grid>
        </Grid>
      </center>
    );
  }
}
export default withStyles(styles)(ConservativeSources);
