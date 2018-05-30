import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      info: []
    };
  }
  //props: phrase, language
  componentDidMount() {
    axios
      .get(
        "https://translate.yandex.net/api/v1.5/tr.json/translate?text=" +
          this.props.phrase +
          "&lang=en-" +
          this.props.language +
          "&key=trnsl.1.1.20180524T202355Z.be1de689c215054b.b0fa44dcd929936ea64480d4a598bba3cc7f9029"
      )
      .then(response => {
        console.log(response);
        let results = response.data;
        this.setState({
          info: results
        });
      })
      .catch(err => {
        console.log(err);
      });
    let translation = this.state.info[0];
    this.setState({ output: translation.text });
  }
  render() {
    return this.state.output;
  }
}
