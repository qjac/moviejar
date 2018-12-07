import React from 'react';
import logo from '../img/logo.svg';
import './App.css';

import GetContainer from './GetContainer/';
import EditContainer from './EditContainer/';

class App extends React.Component {
  render() {
    const list = {
  id: 1,
  name: 'Movie Night',
  movies: [
    { 
      id: 1,
      title: 'Jurassic Park'
    },

    { 
      id: 2,
      title: 'Jurassic Park 2'
    },
    { 
      id: 3,
      title: 'Elf'
    },
    { 
      id: 4,
      title: 'Willow'
    },

  ]
}

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>

        <main>
          <GetContainer list={ list }/>
          <EditContainer list={ list }/>
        </main>

       <footer>footer</footer>
      </div>
    );
  }
}

export default App;
