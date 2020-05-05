import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {MENU_ITEMS} from 'utils'

import './Sidebar.scss'

const Sidebar = ({activeSection, onSelect}) =>
  <nav className="Sidebar is-flex">
    <button className="Sidebar-hamburgerButton is-flex" title="Menu">
      <i className="fas fa-bars" />
    </button>
    <ul>
      {
        MENU_ITEMS.map(([section, iconClass, description], i) => {
          const itemClassName = classnames('Sidebar-menuItem is-flex', {isSelected: activeSection === section})
          const iconClassName = classnames('Sidebar-icon', iconClass)

          return (
            <li key={`sidebar-menu-item-${i}`}
              className={itemClassName}
              data-section={section}
              onClick={onSelect}
              title={description}>
              <i className={iconClassName} />
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
  activeSection: PropTypes.number,
  onSelect: PropTypes.func
}

export default Sidebar
