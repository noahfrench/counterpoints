import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import Translate from "./translate.js";

export default class GlobalSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: []
    };
  }

  componentDidMount() {
    let used = [];
    let norwegian = <Translate phrase={this.props.topic} language="no" />;
    console.log(norwegian);
    //WORK ON THIS STUFFF...
    let arabic = <Translate phrase={this.props.topic} language="ar" />;
    let spanish = <Translate phrase={this.props.topic} language="es" />;
    let russian = <Translate phrase={this.props.topic} language="ru" />;
    let german = <Translate phrase={this.props.topic} language="de" />;
    let hindi = <Translate phrase={this.props.topic} language="hi" />;
    let chinese = <Translate phrase={this.props.topic} language="zh" />;
    let french = <Translate phrase={this.props.topic} language="fr" />;
    axios
      .all([
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=the-new-york-times&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            norwegian +
            "&sources=aftenposten&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=argaam&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=fox-news&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=globo&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=google-news-ru&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=spiegel-online&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=the-gaurdian-au&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=bbc-news&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=the-times-of-india&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=xinhua-net&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=le-monde&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=google-news-is&apiKey=f04b31d91c014184be4a785e6301b4bf"
        )
      ])
      .then(
        axios.spread((a, b, c, d, e, f, g, h, i, j, k, l, m) => {
          let arr1 = a.data.articles
            .slice(0, 1)
            .concat(
              b.data.articles
                .slice(0, 1)
                .concat(
                  c.data.articles
                    .slice(0, 1)
                    .concat(
                      d.data.articles
                        .slice(0, 1)
                        .concat(
                          e.data.articles
                            .slice(0, 1)
                            .concat(
                              f.data.articles
                                .slice(0, 1)
                                .concat(
                                  g.data.articles
                                    .slice(0, 1)
                                    .concat(
                                      h.data.articles
                                        .slice(0, 1)
                                        .concat(
                                          i.data.articles
                                            .slice(0, 1)
                                            .concat(
                                              j.data.articles
                                                .slice(0, 1)
                                                .concat(
                                                  k.data.articles
                                                    .slice(0, 1)
                                                    .concat(
                                                      l.data.articles
                                                        .slice(0, 1)
                                                        .concat(
                                                          m.data.articles
                                                            .slice(0, 1)
                                                            .concat()
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
          this.setState({
            middle: arr1
          });
          console.log(this.state.middle);
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
}
