import React, { Component } from "react";

export default class Pic extends Component {
  render() {
    if (this.props.url === null) {
      return (
        <div>
          <img
            src={
              "https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png"
            }
            alt="not-found"
            width="170"
            height="100"
          />
        </div>
      );
    } else if (this.props.url.slice(0, 4) === "http") {
      return (
        <img src={this.props.url} alt="from-article" width="170" height="100" />
      );
    } else {
      return (
        <div>
          <img
            src={
              "https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png"
            }
            alt="not-found2"
            width="170"
            height="100"
          />
        </div>
      );
    }
  }
}
