import React, { Component } from "react";

import classes from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: this.props.count,
    step: this.props.step,

    min: this.props.min,
    max: this.props.max,
  };

  handleDecrement = () => {
    const {count, min, step} = this.state

    if (count > min) {
      this.setState((prevState) => {
        return {
          count: prevState.count - step,
        };
      })
    }
  };

  handleIncrement = () => {
    const {count, max, step} = this.state

    if (count < max) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step,
        };
      })
    }
  };

  render() {
    return (
      <div className={classes.main}>
        <h2 className={classes.text}>Counter</h2>
        <div className={classes.counterWraper}>
          <button className={classes.decrement} onClick={this.handleDecrement}>
            -
          </button>
          <p>{this.state.count}</p>
          <button className={classes.increment} onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
