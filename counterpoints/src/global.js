import React, { Component } from "react";

import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";
import ArticleTile from "./articleTile.js";
import ActionBar from "./actionbar.js";

const styles = theme => ({
  paper1: {
    height: 120,
    width: 800,
    padding: 8
  }
});
class GlobalSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: [],
      sources: [
        { abrv: "the-new-york-times", num: 40 },
        { abrv: "aftenposten", num: 0 },
        { abrv: "al-jazeera-english", num: 1 },
        { abrv: "fox-news", num: 40 },
        { abrv: "globo", num: 2 },
        { abrv: "la-nacion", num: 3 },
        { abrv: "spiegel-online", num: 5 },
        { abrv: "la-repubblica", num: 40 },
        { abrv: "bbc-news", num: 40 },
        { abrv: "the-times-of-india", num: 40 },
        { abrv: "xinhua-net", num: 6 },
        { abrv: "les-echos", num: 4 },
        { abrv: "the-jerusalem-post", num: 40 }
      ],
      langs: [
        { code: "en", word: "" },
        { code: "no", word: "" },
        { code: "en", word: "" },
        { code: "en", word: "" },
        { code: "pt", word: "" },
        { code: "es", word: "" },
        { code: "de", word: "" },
        { code: "it", word: "" },
        { code: "en", word: "" },
        { code: "en", word: "" },
        { code: "zh", word: "" },
        { code: "fr", word: "" },
        { code: "en", word: "" }
      ],
      count: 0
    };
  }

  refreshPage = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  componentDidMount() {
    let want = [];
    for (let j = 0; j < 13; j++) {
      axios
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
            this.props.topic +
            "&lang=en-" +
            this.state.langs[j].code +
            "&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
        )
        .then(response => {
          let result = response.data.text;
          let outlet = this.state.sources[j];
          axios
            .get(
              "https://newsapi.org/v2/everything?q=" +
                result +
                "&sources=" +
                outlet.abrv +
                "&apiKey=f04b31d91c014184be4a785e6301b4bf"
            )
            .then(response => {
              let arr1 = response.data.articles;
              if (arr1[0] === undefined) {
                return null;
              }
              want.push(arr1[0]);
              this.setState({ middle: want });
              //console.log(this.state.middle);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { classes } = this.props;
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
              {this.state.middle.map(article => (
                <ArticleTile article={article} />
              ))}
            </Grid>
          </Grid>
        </center>
      </div>
    );
  }
}
export default withStyles(styles)(GlobalSources);
