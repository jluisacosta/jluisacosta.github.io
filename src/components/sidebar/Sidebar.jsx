import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {SECTIONS} from '../sections'

import './Sidebar.scss'

const Sidebar = ({activeSection, onSelect}) =>
  <nav className="Sidebar is-flex">
    <button className="Sidebar-hamburgerButton is-flex" title="Menu">
      <i className="fas fa-bars" />
    </button>
    <ul>
      {
        Object.keys(SECTIONS).map(key => {
          const {name, icon, title} = SECTIONS[key]
          const className = classnames('Sidebar-menuItem is-flex', {isSelected: activeSection === name})

          return (
            <li key={key} data-section={name} className={className} title={title} onClick={onSelect}>
              <i className={classnames('Sidebar-icon', icon)} />
            </li>
          )
        })
      }
    </ul>
    <button className="Sidebar-downloadButton is-flex" title="Download Resume">
      <i className="fas fa-cloud-download-alt" />
    </button>
  </nav>

Sidebar.displayName = 'Sidebar'

Sidebar.propTypes = {
  activeSection: PropTypes.string,
  onSelect: PropTypes.func
}

export default Sidebar
