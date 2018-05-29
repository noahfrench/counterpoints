import React, { Component } from "react";

export default class Pic extends Component {
  render() {
    if (this.props.url === null) {
      return (
        <img
          src={
            "https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/4/4f/White_square.jpg/revision/latest?cb=20140413154605"
          }
          width="170"
        />
      );
    } else if (this.props.url.slice(0, 4) === "http") {
      return <img src={this.props.url} width="170" />;
    } else {
      return (
        <img
          src={
            "https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/4/4f/White_square.jpg/revision/latest?cb=20140413154605"
          }
          width="170"
          height="100"
        />
      );
    }
  }
}
