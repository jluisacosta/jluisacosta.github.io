import React from 'react'
import PropTypes from 'prop-types'
import Section from '../section'

import './Main.scss'

const Main = ({activeSection}) =>
  <div className="Main is-relative">
    <Section activeSection={activeSection} />
  </div>

Main.displayName = 'Main'

Main.propTypes = {
  activeSection: PropTypes.number
}

export default Main
