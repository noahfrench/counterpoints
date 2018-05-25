import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      arr: []
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
        let arr1 = response.data;
        this.setState({
          arr: arr1
        });
      })
      .catch(err => {
        console.log(err);
      });
    let abc = this.state.arr[0];
    this.setState({ output: abc.text });
  }
  render() {
    return this.state.output;
  }
}
