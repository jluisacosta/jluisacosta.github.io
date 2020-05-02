import React, {useState, useCallback, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Section from '../section'

import './Main.scss'

const TRANSITIONEND = 'transitionend'

const Main = ({activeSection}) => {
  const [className, setClassName] = useState('')
  const resetClassName = useCallback(() => setClassName(''), [])
  const mainRef = useRef(null)
  

  useEffect(() => {
    let mainElement = mainRef.current
    mainElement.addEventListener(TRANSITIONEND, resetClassName)
    setClassName('isMounted')

    return () => mainElement.removeEventListener(TRANSITIONEND, resetClassName)
  }, [activeSection, resetClassName])

  return (
    <div className={classnames('Main is-relative', className)} ref={mainRef}>
      <Section activeSection={activeSection} />
    </div>
  )
}

Main.displayName = 'Main'

Main.propTypes = {
  activeSection: PropTypes.number
}

export default Main
