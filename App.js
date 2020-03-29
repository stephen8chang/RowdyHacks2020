import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{JSON.stringify(this.props.title)}</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="fuck you bloody" obj={{ name: 5, bitch: "bitch" }} />
        <Body />
      </div>
    );
  }
}

export default App;
