import React, { Component } from "react";
import axios from "axios";
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
class ArticleTile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.article.art.title
    };
  }

  componentDidMount() {
    if (this.props.article.code !== "en") {
      axios
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
            this.props.article.art.title.replace("#", "") +
            "&lang=" +
            this.props.article.code +
            "-en&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
        )
        .then(response => {
          let result = response.data.text;
          this.setState({ title: result });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper1}>
        <Grid container wrap="nowrap" spacing={16} justify="center">
          <Grid item zeroMinWidth>
            <Pic url={this.props.article.art.urlToImage} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography align="left" variant="headline" noWrap>
              {this.state.title}
            </Typography>

            <Typography align="left" noWrap variant="subheading">
              {this.props.article.art.source.name}
            </Typography>

            <Typography align="left" noWrap>
              {this.props.article.art.publishedAt.substring(0, 10)}
            </Typography>
            <Typography align="left" noWrap>
              {this.props.article.place}
            </Typography>

            <Typography noWrap align="left" noWrap>
              <a href={this.props.article.art.url} target="_blank">
                {this.props.article.art.url}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(ArticleTile1);
