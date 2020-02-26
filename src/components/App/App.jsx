import React from 'react'
import logo from 'static/images/logo.svg'
import Background from '../background'
import BaseLayout from '../base-layout'

import './App.scss'

const App = () =>
  <div className="App">
    <Background>
      <BaseLayout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">José Luis Acosta</h3>
          <p className="App-paragraph">jluisacosta.github.io</p>
          <i className="fas fa-code"/>
        </header>
      </BaseLayout>
    </Background>
  </div>

App.displayName = 'App'

export default App
