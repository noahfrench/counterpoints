//component for global sources

import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArticleTile1 from "./articleTile1.js";
import ActionBar from "./actionbar.js";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      //sources holds the api abbreviations associated with each news outlet, and their location
      sources: [
        { abrv: "the-new-york-times", place: "United States" },
        { abrv: "aftenposten", place: "Norway" },
        { abrv: "al-jazeera-english", place: "Middle East" },
        { abrv: "fox-news", place: "United States" },
        { abrv: "globo", place: "Brazil" },
        { abrv: "la-nacion", place: "Argentina" },
        { abrv: "spiegel-online", place: "Germany" },
        { abrv: "la-repubblica", place: "Italy" },
        { abrv: "bbc-news", place: "Great Britain" },
        { abrv: "the-times-of-india", place: "India" },
        { abrv: "xinhua-net", place: "China" },
        { abrv: "les-echos", place: "France" },
        { abrv: "the-jerusalem-post", place: "Jerusalem" },
        { abrv: "the-irish-times", place: "Ireland" },
        { abrv: "lenta", place: "Russia" }
      ],
      //holds language codes for language associated with each news outlet
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
        { code: "en" },
        { code: "en" },
        { code: "ru" }
      ],
      render: false
    };
  }
  //re-call componentDidMount to do a new search on results page
  refreshPage = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  componentDidMount() {
    //desiredArticles stores the results pulled from the large array for each news outlet
    let desiredArticles = [];
    //iterate through each news outlet/language code and make the api call
    for (let j = 0; j < this.state.sources.length; j++) {
      axios
        //translator api call
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
            this.props.topic.replace("#", "") +
            "&lang=en-" +
            this.state.langs[j].code +
            "&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
        )
        .then(response => {
          let result = response.data.text;
          let outlet = this.state.sources[j];
          //news outlet api call
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
              //create an object with first article from a source, its langauge code and location
              let obj = {
                art: allOutletArt[0],
                code: this.state.langs[j].code,
                place: this.state.sources[j].place
              };
              //store this object
              desiredArticles.push(obj);
              this.setState({ output: desiredArticles });
            })
            .catch(err => {
              console.log(err);
            });
          this.setState({ count: this.state.output.length });
        })
        .catch(err => {
          console.log(err);
        });
    }
    setTimeout(
      function() {
        //Start the timer
        this.setState({ render: true }); //After 1 second, set render to true
      }.bind(this),
      2000
    );
  }

  render() {
    if (this.state.output.length === 0 && !this.state.render) {
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
            <center>
              <CircularProgress color="secondary" />
            </center>
          </center>
        </div>
      );
    } else if (this.state.output.length === 0 && this.state.render) {
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
            <center>
              No results found. Please try again with a new option or key-word.
            </center>
          </center>
        </div>
      );
    }
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
            {this.state.output.map(article => (
              <Grid item xs={12}>
                <ArticleTile1 article={article} />
              </Grid>
            ))}
          </Grid>
        </center>
      </div>
    );
  }
}
export default withStyles(styles)(GlobalSources);
