import React from 'react'
import PropTypes from 'prop-types'
import {SECTION_HEADERS} from 'utils'

import './Main.scss'

const Main = ({activeSection}) =>
  <section className="Main">
    <header className="Main-header">
      <h1 className="Main-title">
        {SECTION_HEADERS[activeSection]}
      </h1>
    </header>
  </section>

Main.displayName = 'Main'

Main.propTypes = {
  activeSection: PropTypes.number
}

export default Main
