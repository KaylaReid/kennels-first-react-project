import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
      const myName = "Kayla Reid"
      const ricky = <h2>Ricky Bruner</h2>;
      // comments
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* comments, comments need to be within the one object that is being returned. Return can only return 1 thing!!!!!!!!!!!!!!!!! */}
        <h2>{myName}</h2>
        {ricky}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
