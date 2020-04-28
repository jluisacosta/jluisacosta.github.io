import React from 'react'

import './Sidebar.scss'

const MENU_ITEMS = [
  ['fas fa-user', 'About Me'],
  ['fas fa-code', 'Skills'],
  ['fas fa-briefcase', 'Experience'],
  ['fas fa-graduation-cap', 'Education'],
  ['fas fa-envelope', 'Contact Me']
]

const Sidebar = () =>
  <nav className="Sidebar is-flex">
    <button className="Sidebar-hamburgerButton is-flex">
      <i className="fas fa-bars" />
    </button>
    <ul>
      {
        MENU_ITEMS.map(([iconClass, description]) =>
          <li className="Sidebar-menuItem is-flex">
            <i className={iconClass} title={description}/>
          </li>
        )
      }
    </ul>
    <button>Download Resumé</button>
  </nav>

Sidebar.displayName = 'Sidebar'

export default Sidebar
