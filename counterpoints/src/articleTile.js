//formatting results for liberal and conservative sources
import React, { Component } from "react";
import "./articleTile.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";

//style for the paper material ui blocks
const styles = theme => ({
  paper1: {
    height: 100,
    width: 1100,
    padding: 8,
    backgroundColor: "#FAFAFA",
    square: true
  }
});
class ArticleTile extends Component {
  render() {
    const { classes } = this.props;
    return (
      //each block is a paper component with a grid inside to organize picture and info
      <Paper className={classes.paper1}>
        <Grid container wrap="nowrap" spacing={16} justify="center">
          {/*grid item holds image associated with article*/}
          <Grid item zeroMinWidth>
            <div>
              <Pic url={this.props.article.urlToImage} />
            </div>
          </Grid>
          {/*grid item holds text info about each article*/}
          <Grid item xs zeroMinWidth>
            <Typography align="left" variant="headline" noWrap>
              {/*article title with link to source*/}
              <a href={this.props.article.url} target="_blank">
                {this.props.article.title}
              </a>
            </Typography>
            {/*name of news media outlet*/}
            <h1 className="Source-text" align="left" noWrap>
              {this.props.article.source.name}
            </h1>
            {/*date article was published*/}
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
