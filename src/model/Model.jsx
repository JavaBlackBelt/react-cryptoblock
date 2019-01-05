import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class Model extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div>{this.props.children}</div>;
  }
}
export default Model;
