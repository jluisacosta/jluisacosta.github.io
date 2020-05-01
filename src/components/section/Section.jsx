import React from 'react'
import PropTypes from 'prop-types'
import {SECTION_HEADERS} from 'utils'

import './Section.scss'

const Section = ({activeSection}) =>
  <section className="Section">
    <header className="Section-header">
      <h1 className="Section-title">
        {SECTION_HEADERS[activeSection]}
      </h1>
    </header>
  </section>

Section.displayName = 'Section'

Section.propTypes = {
  activeSection: PropTypes.number
}

export default Section
