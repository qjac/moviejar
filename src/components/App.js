import React from 'react';
import logo from '../img/logo.svg';
import './App.css';

import GetContainer from './GetContainer/';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>

        <main>
          <GetContainer />
        </main>

       <footer>footer</footer>
      </div>
    );
  }
}

export default App;
