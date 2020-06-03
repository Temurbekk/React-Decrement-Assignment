import React, { Component } from "react";

export class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.props.start,
    };
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.state.start === 0
      ? alert("Cannot be less than 0")
      : this.setState({
          start: this.state.start - 1,
        });
  }
  render() {
    return (
      <>
        <div className="box">
          <div className="level">
            <div>{this.state.start}</div>
            <div className="button" onClick={this.decrement}>
              Decrement!
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Decrement;
