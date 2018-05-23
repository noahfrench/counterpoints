import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nyt: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=dog&sources=the-new-york-times&apiKey=f04b31d91c014184be4a785e6301b4bf"
      )
      .then(response => {
        console.log(response);
        let nyt1 = response.data.articles;

        this.setState({
          nyt: nyt1
        });
      })

      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul>
        {this.state.nyt.map(article => (
          <li>
            Title: {article.title}
            <br />
            Source: New York times
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

export default App;
