import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";

const styles = theme => ({
  paper1: {
    height: 120,
    width: 800,
    padding: 8
  }
});
class ArticleTile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper1}>
        <Grid container wrap="nowrap" spacing={16} justify="center">
          <Grid item zeroMinWidth>
            <Pic url={this.props.article.urlToImage} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography align="left" variant="headline" noWrap>
              {this.props.article.title}
            </Typography>

            <Typography align="left" noWrap variant="subheading">
              {this.props.article.source.name}
            </Typography>

            <Typography align="left" noWrap>
              {this.props.article.publishedAt.substring(0, 10)}
            </Typography>

            <Typography noWrap align="left" noWrap>
              <a href={this.props.article.url} target="_blank">
                {this.props.article.url}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(ArticleTile);
