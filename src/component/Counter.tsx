import React, { Component } from "react";
interface CounterState {
  count: number;
}

class Counter extends Component {
  state: CounterState = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <p style={{ color: "black" }}>
          <strong>Count:</strong> {this.state.count}
        </p>
        <button
          onClick={this.increment}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Increment
        </button>
        <button
          onClick={this.decrement}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
