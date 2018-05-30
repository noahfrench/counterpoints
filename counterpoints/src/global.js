import React, { Component } from "react";

import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Pic from "./pic.js";
import ArticleTile1 from "./articleTile1.js";
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
      output: [],
      sources: [
        { abrv: "the-new-york-times" },
        { abrv: "aftenposten" },
        { abrv: "al-jazeera-english" },
        { abrv: "fox-news" },
        { abrv: "globo" },
        { abrv: "la-nacion" },
        { abrv: "spiegel-online" },
        { abrv: "la-repubblica" },
        { abrv: "bbc-news" },
        { abrv: "the-times-of-india" },
        { abrv: "xinhua-net" },
        { abrv: "les-echos" },
        { abrv: "the-jerusalem-post" }
      ],
      langs: [
        { code: "en" },
        { code: "no" },
        { code: "en" },
        { code: "en" },
        { code: "pt" },
        { code: "es" },
        { code: "de" },
        { code: "it" },
        { code: "en" },
        { code: "en" },
        { code: "zh" },
        { code: "fr" },
        { code: "en" }
      ],
      count: 0
    };
  }

  refreshPage = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  componentDidMount() {
    let desiredArticles = [];
    for (let j = 0; j < 13; j++) {
      axios
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
            this.props.topic +
            "&lang=en-" +
            this.state.langs[j].code +
            "&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
        )
        //create object that stores language code with output
        .then(response => {
          let result = response.data.text;
          let outlet = this.state.sources[j];
          axios
            .get(
              "https://newsapi.org/v2/everything?q=" +
                result +
                "&sources=" +
                outlet.abrv +
                "&apiKey=" +
                this.props.apiKey
            )
            .then(response => {
              let allOutletArt = response.data.articles;
              if (allOutletArt[0] === undefined) {
                return null;
              }
              let obj = {
                art: allOutletArt[0],
                code: this.state.langs[j].code
              };
              desiredArticles.push(obj);
              this.setState({ output: desiredArticles });
              //console.log(this.state.output);
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
              {this.state.output.map(article => (
                <ArticleTile1 article={article} />
              ))}
            </Grid>
          </Grid>
        </center>
      </div>
    );
  }
}
export default withStyles(styles)(GlobalSources);
