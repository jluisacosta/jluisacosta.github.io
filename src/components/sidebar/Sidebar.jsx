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
    <button className="Sidebar-hamburgerButton is-flex" title="Menu">
      <i className="fas fa-bars" />
    </button>
    <ul>
      {
        MENU_ITEMS.map(([iconClass, description], i) =>
          <li
            key={`sidebar-menu-item-${i}`}
            className="Sidebar-menuItem is-flex"
            title={description}>
            <i className={iconClass} />
          </li>
        )
      }
    </ul>
    <button className="Sidebar-downloadButton is-flex" title="Download Resume">
      <i className="fas fa-cloud-download-alt" />
    </button>
  </nav>

Sidebar.displayName = 'Sidebar'

export default Sidebar
