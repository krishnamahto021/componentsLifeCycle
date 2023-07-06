import React from "react";
import Name from "./components/Name";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: false
    };
  }

  // Function to toggle the showName state
  toggleShowName = () => {
    this.setState((prevState) => {
      return {
        showName: !(prevState.showName)
      }
    })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShowName} className="button-85" showName = {this.state.showName}>
          {this.state.showName ? "Stop" : "Start"}
        </button>
        <Name showName={this.state.showName} />
      </div>
    );
  }
}