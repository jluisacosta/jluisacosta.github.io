import React from 'react'

import './Sidebar.scss'

const Sidebar = () =>
  <nav className="Sidebar is-flex">
    <button className="Sidebar-hamburgerButton">
      <i className="fas fa-bars" />
    </button>
    <ul>
      <li>About Me</li>
      <li>Skills</li>
      <li>Experience</li>
      <li>Education</li>
      <li>Contact Me</li>
    </ul>
    <button>Download Resumé</button>
  </nav>

Sidebar.displayName = 'Sidebar'

export default Sidebar
