import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.css';

import MegaButtonContainer from './MegaButton/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          <MegaButtonContainer />
        </main>

       <footer>footer</footer>
      </div>
    );
  }
}

export default App;
