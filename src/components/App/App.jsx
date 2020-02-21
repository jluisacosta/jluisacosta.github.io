import React from 'react';
import logo from 'static/images/logo.svg';
import './App.scss';

const App = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>jluisacosta.github.io</p>
    </header>
  </div>

App.displayName = 'App'

export default App;
