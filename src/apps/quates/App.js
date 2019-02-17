import React, { Component } from "react";
import "./App.css";
import Quate from "./components/Quate";

class Quates extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <Quate />
        </div>
      </div>
    );
  }
}

export default Quates;
