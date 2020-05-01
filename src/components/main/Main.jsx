import React from 'react'
import PropTypes from 'prop-types'
import Section from '../section'

import './Main.scss'

const Main = ({activeSection}) =>
  <main className="Main">
    <Section activeSection={activeSection} />
  </main>

Main.displayName = 'Main'

Main.propTypes = {
  activeSection: PropTypes.number
}

export default Main
