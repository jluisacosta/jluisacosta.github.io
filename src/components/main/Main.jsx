import React from 'react'
import logo from 'static/images/logo.svg'

import './Main.scss'

const Main = () =>
  <div className="Main">
    <img src={logo} style={{width: '100px'}}alt="logo" />
    <h3 style={{fontFamily: 'Poppins', color: 'white'}}>José Luis Acosta</h3>
    <p style={{fontFamily: 'Roboto', color: 'white'}}>jluisacosta.github.io</p>
    <i className="fas fa-code" style={{color: 'white'}}/>
  </div>

Main.displayName = 'Main'

export default Main
