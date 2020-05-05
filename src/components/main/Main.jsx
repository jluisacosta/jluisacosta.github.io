import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {SECTIONS, SECTION_HEADERS} from 'utils'
import SectionContainer from '../section-container'

import './Main.scss'

const Main = ({className, activeSection, onTransitionEnd}) =>
  <div className={classnames('Main is-relative', className)} onTransitionEnd={onTransitionEnd}>
    <SectionContainer title={SECTION_HEADERS[activeSection]}>
      {
        {
          [SECTIONS.AboutMe]: <p>About Me Content</p>,
          [SECTIONS.Skills]: <p>Skills Content</p>,
          [SECTIONS.Experience]: <p>Experience Content</p>,
          [SECTIONS.Education]: <p>Education Content</p>,
          [SECTIONS.ContactMe]: <p>Contact Me Content</p>
        }[activeSection]
      }
    </SectionContainer>
  </div>

Main.displayName = 'Main'

Main.propTypes = {
  className: PropTypes.string,
  activeSection: PropTypes.number,
  onTransitionEnd: PropTypes.func
}

export default Main
