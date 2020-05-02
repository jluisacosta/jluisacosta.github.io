import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Section from '../section'

import './Main.scss'

const TRANSITIONEND = 'transitionend'

const Main = ({className, activeSection, onTransitionEnd}) => {
  const mainRef = useRef(null)
  
  useEffect(() => {
    let mainElement = mainRef.current
    mainElement.addEventListener(TRANSITIONEND, onTransitionEnd)
    return () => mainElement.removeEventListener(TRANSITIONEND, onTransitionEnd)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className={classnames('Main is-relative', className)} ref={mainRef}>
      <Section activeSection={activeSection} />
    </div>
  )
}

Main.displayName = 'Main'

Main.propTypes = {
  className: PropTypes.string,
  activeSection: PropTypes.number,
  onTransitionEnd: PropTypes.func
}

export default Main
