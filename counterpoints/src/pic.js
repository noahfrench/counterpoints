//component to determine picture to display, and to format the picture for each article
import React, { Component } from "react";

export default class Pic extends Component {
  render() {
    //if the urlToImage is null, put the default picture
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
      //if the urlToImage starts with http then it is likely correct, use this image url to get and render picture
    } else if (this.props.url.slice(0, 4) === "http") {
      return (
        <img src={this.props.url} alt="from-article" width="170" height="100" />
      );
    } //if the urlToImage doesn't start with http then use default picture
    else {
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
