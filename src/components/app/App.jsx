import React, {useState, useCallback} from 'react'
import classnames from 'classnames'
import BaseLayout from '../base-layout'
import Sidebar from '../sidebar'
import ProfilePhoto from '../profile-photo'
import Main from '../main'
import {DEFAULT_SECTION, TRANSITION_CLASS} from 'utils'

import './App.scss'

const App = () => {
  const [activeSection, setActiveSection] = useState(DEFAULT_SECTION)
  const [previousSection, setPreviousSection] = useState(DEFAULT_SECTION)
  const [isInTransition, setIsInTransition] = useState(false)

  const onSelect = useCallback(({target: {dataset}}) => {
    setIsInTransition(true)
    setPreviousSection(activeSection)
    setActiveSection(Number(dataset.section))
  }, [activeSection])
  
  const onTransitionEnd = useCallback(({target: {className}}) => {
    if (className.includes(TRANSITION_CLASS)) {
      setIsInTransition(false)
    }
  }, [])

  return (
  <div className="App">
    <BaseLayout>
      <Sidebar
        activeSection={activeSection}
        onSelect={onSelect} />
      <ProfilePhoto />
      <Main
        className={classnames({[TRANSITION_CLASS]: isInTransition})}
        activeSection={isInTransition ? previousSection : activeSection}
        onTransitionEnd={onTransitionEnd} />
    </BaseLayout>
  </div>
  )
}

App.displayName = 'App'

export default App
