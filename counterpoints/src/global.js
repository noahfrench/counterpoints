import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Translate from "./translate.js";

export default class GlobalSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: [],
      sources: [
        { abrv: "the-new-york-times", num: 40 },
        { abrv: "aftenposten", num: 0 },
        { abrv: "argaam", num: 1 },
        { abrv: "fox-news", num: 40 },
        { abrv: "globo", num: 2 },
        { abrv: "la-nacion", num: 3 },
        { abrv: "spiegel-online", num: 5 },
        { abrv: "the-gaurdian-au", num: 40 },
        { abrv: "bbc-news", num: 40 },
        { abrv: "the-times-of-india", num: 40 },
        { abrv: "xinhua-net", num: 6 },
        { abrv: "le-monde", num: 4 },
        { abrv: "the-jerusalem-post", num: 40 }
      ],
      langs: [
        { code: "no", word: "" },
        { code: "ar", word: "" },
        { code: "pt", word: "" },
        { code: "es", word: "" },
        { code: "fr", word: "" },
        { code: "de", word: "" },
        { code: "zh", word: "" }
      ],
      count: 0
    };
  }

  componentDidMount() {
    let want = [];
    for (let j = 0; j < 7; j++) {
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
          this.setState({ [this.state.langs[j].word]: result });
          this.setState({ count: this.state.count + 1 });
        })
        .catch(err => {
          console.log(err);
        });
    }
    for (let i = 0; i < 13; i++) {
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
    }
  }
  render() {
    return (
      <ul>
        {this.state.middle.map(article => (
          <li>
            Title: {article.title}
            <br />
            Source: {article.source.id}
            <br />
            URL: <a href={article.url}>{article.url}</a>
            <br />
            <img src={article.urlToImage} height="100" />
          </li>
        ))}
      </ul>
    );
  }
}
