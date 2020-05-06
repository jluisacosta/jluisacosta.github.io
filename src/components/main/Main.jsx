import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {SECTIONS} from '../sections/index'

import './Main.scss'

const Main = ({className, activeSection, onTransitionEnd}) => {
  const classNames = classnames('Main is-relative', className)
  const {title, view} = SECTIONS[activeSection]

  return (
    <div className={classNames} onTransitionEnd={onTransitionEnd}>
      <section className="Main-section">
        <header className="Main-header">
          <h1 className="Main-title">{title.toLowerCase()}</h1>
        </header>
        {view}
      </section>
    </div>
  )
}

Main.displayName = 'Main'

Main.propTypes = {
  className: PropTypes.string,
  activeSection: PropTypes.string,
  onTransitionEnd: PropTypes.func
}

export default Main
