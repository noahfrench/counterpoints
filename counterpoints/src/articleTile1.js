//formatting of results for global sources
import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";
import "./articleTile.css";

//style for the paper matieral ui blocks
const styles = theme => ({
  paper1: {
    height: 100,
    width: 1100,
    padding: 8
  }
});
class ArticleTile1 extends Component {
  //constructor, state is article title which will be translated
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.article.art.title
    };
  }

  componentDidMount() {
    //if article title is not in english, translate
    if (this.props.article.code !== "en") {
      axios
        //axios call to translator api, pass in title and language code
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
            this.props.article.art.title.replace("#", "") +
            "&lang=" +
            this.props.article.code +
            "-en&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
        )
        .then(response => {
          //set state to translated title
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
      //each block is a paper component with a grid inside to organize picture and info
      <Paper className={classes.paper1}>
        <Grid container wrap="nowrap" spacing={16} justify="center">
          <Grid item zeroMinWidth>
            {/*grid item holds image associated with article*/}
            <Pic url={this.props.article.art.urlToImage} />
          </Grid>
          {/*grid item holds text info about each article*/}
          <Grid item xs zeroMinWidth>
            {/*article title with link to source*/}
            <Typography align="left" variant="headline" noWrap>
              <a href={this.props.article.art.url} target="_blank">
                {this.state.title}
              </a>
            </Typography>
            {/*name of news media outlet*/}
            <h1 className="Source-text" align="left" noWrap>
              {this.props.article.art.source.name}
            </h1>
            {/*date article was published*/}
            <h1 className="Date-text" align="left" noWrap>
              {this.props.article.art.publishedAt.substring(0, 10)}
            </h1>
            {/*place where news outlet is from*/}
            <h1 className="Date-text" align="left" noWrap>
              {this.props.article.place}
            </h1>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(ArticleTile1);
