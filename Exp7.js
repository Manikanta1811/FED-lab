import React, { Component } from "react";

export default class Exp7 extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }

  redHandler = () => {
    this.setState({ color: "#FF0000" });
  };
  greenHandler = () => {
    this.setState({ color: "#00FF00" });
  };
  blueHandler = () => {
    this.setState({ color: "#0000FF" });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color, paddingLeft:'20px' }}>Hello World!</h1>
        <button type="button" onClick={this.redHandler}>R E D</button>
        &nbsp;&nbsp;
        <button type="button" onClick={this.greenHandler}>G R E E N</button>
        &nbsp;&nbsp;
        <button type="button" onClick={this.blueHandler}>B L U E</button>
      </div>
    );
  }
}