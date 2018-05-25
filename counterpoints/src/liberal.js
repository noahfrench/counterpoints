import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class LiberalSources extends Component {
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
            "&apiKey=f04b31d91c014184be4a785e6301b4bf"
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
