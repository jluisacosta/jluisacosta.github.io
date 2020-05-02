import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Section from '../section'

import './Main.scss'

const Main = ({className, activeSection, onTransitionEnd}) =>
  <div className={classnames('Main is-relative', className)} onTransitionEnd={onTransitionEnd}>
    <Section activeSection={activeSection} />
  </div>

Main.displayName = 'Main'

Main.propTypes = {
  className: PropTypes.string,
  activeSection: PropTypes.number,
  onTransitionEnd: PropTypes.func
}

export default Main
