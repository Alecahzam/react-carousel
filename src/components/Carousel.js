import React, { Component } from "react";
import { Card } from "./Card";
import BottomBar from "./BottomBar";
import { students } from "./Students";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      length: students.length
    };
  }

  previous = () => {
    return this.state.counter > 0
      ? this.setState({ counter: this.state.counter - 1 })
      : this.setState({ counter: students.length - 1 });
  };

  next = () => {
    return this.state.counter < this.state.length - 1
      ? this.setState({ counter: this.state.counter + 1 })
      : this.setState({ counter: 0 });
  };

  render() {
    return (
      <main className="carousel">
        <Card
          counter={this.state.counter}
          length={this.state.length}
          students={students}
        />
        <BottomBar previous={this.previous} next={this.next} />
      </main>
    );
  }
}

export default Carousel;
