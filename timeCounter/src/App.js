import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timeCount: 0,
      isTimeCount: false
    };
  }

  componentDidMount() {}

  handleStartStopTimer = () => {
    this.setState((prevState) => ({
      isTimeCount: !prevState.isTimeCount
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isTimeCount !== this.state.isTimeCount) {
      if (this.state.isTimeCount) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({
            timeCount: prevState.timeCount + 1
          }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { timeCount, isTimeCount } = this.state;
    return (
      <div className="App">
        <h1>
          You spent : {new Date(timeCount * 1000).toISOString().slice(11, 19)}
        </h1>
        <button onClick={this.handleStartStopTimer}>
          {isTimeCount ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}
