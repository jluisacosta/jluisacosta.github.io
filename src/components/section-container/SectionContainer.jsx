import React from 'react'
import PropTypes from 'prop-types'

import './SectionContainer.scss'

const SectionContainer = ({title, children}) =>
  <section className="SectionContainer">
    <header className="SectionContainer-header">
      <h1 className="SectionContainer-title">{title}</h1>
    </header>
    {children}
  </section>

SectionContainer.displayName = 'SectionContainer'

SectionContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default SectionContainer
