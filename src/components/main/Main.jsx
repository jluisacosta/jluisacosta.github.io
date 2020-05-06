import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SectionContainer from '../section-container'
import {SECTIONS} from '../sections/index'

import './Main.scss'

const Main = ({className, activeSection, onTransitionEnd}) => {
  const {title, view} = SECTIONS[activeSection]

  return (
    <div className={classnames('Main is-relative', className)} onTransitionEnd={onTransitionEnd}>
      <SectionContainer title={title.toLowerCase()}>{view}</SectionContainer>
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
