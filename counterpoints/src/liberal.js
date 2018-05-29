import React, { Component } from "react";

import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  paper1: {
    height: 120,
    width: 800,
    padding: 8
  }
});

class LiberalSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: [],
      sources: [
        { abrv: "the-new-york-times" },
        { abrv: "the-washington-post" },
        { abrv: "politico" },
        { abrv: "cnn" },
        { abrv: "abc-news" }
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
            "&apiKey=6fef8bd638b646a8a685a0560ce89f0d"
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
              <Paper className={classes.paper1}>
                <Grid container wrap="nowrap" spacing={16} justify="center">
                  <Grid item zeroMinWidth>
                    <img src={article.urlToImage} width="170" />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography align="left" variant="headline" noWrap>
                      {article.title}
                    </Typography>

                    <Typography align="left" noWrap variant="subheading">
                      {article.source.name}
                    </Typography>

                    <Typography align="left" noWrap>
                      Date: {article.publishedAt.substring(0, 10)}
                    </Typography>

                    <Typography noWrap align="left" noWrap>
                      <a href={article.url}>{article.url}</a>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </center>
    );
  }
}

export default withStyles(styles)(LiberalSources);
