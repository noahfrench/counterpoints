import React, { Component } from "react";
import "./articleTile.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";

const styles = theme => ({
  paper1: {
    height: 100,
    width: 1100,
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
            <div>
              <Pic url={this.props.article.urlToImage} />
            </div>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography align="left" variant="headline" noWrap>
              <a href={this.props.article.url} target="_blank">
                {this.props.article.title}
              </a>
            </Typography>

            <h1 className="Source-text" align="left" noWrap>
              {this.props.article.source.name}
            </h1>

            <h1 className="Date-text" align="left" noWrap>
              {this.props.article.publishedAt.substring(0, 10)}
            </h1>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(ArticleTile);
