import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";

export default class LiberalSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      middle: []
    };
  }

  componentDidMount() {
    let used = [];
    let topic = "dog";
    axios
      .all([
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=the-new-york-times&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=the-washington-post&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=politico&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=cnn&apiKey=f04b31d91c014184be4a785e6301b4bf"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.topic +
            "&sources=abc-news&apiKey=f04b31d91c014184be4a785e6301b4bf"
        )
      ])
      .then(
        axios.spread((a, b, c, d, e) => {
          let arr1 = a.data.articles
            .slice(0, 2)
            .concat(
              b.data.articles
                .slice(0, 2)
                .concat(
                  c.data.articles
                    .slice(0, 2)
                    .concat(
                      d.data.articles
                        .slice(0, 2)
                        .concat(e.data.articles.slice(0, 2))
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
