import React from 'react'
import logo from 'static/images/logo.svg'
import Background from '../background'
import BaseLayout from '../base-layout'

import './App.scss'

const App = () =>
  <div className="App">
    <Background>
      <BaseLayout>
        <img src={logo} style={{width: '100px'}}alt="logo" />
        <h3 style={{fontFamily: 'Poppins', color: 'white'}}>José Luis Acosta</h3>
        <p style={{fontFamily: 'Roboto', color: 'white'}}>jluisacosta.github.io</p>
        <i className="fas fa-code" style={{color: 'white'}}/>
      </BaseLayout>
    </Background>
  </div>

App.displayName = 'App'

export default App
