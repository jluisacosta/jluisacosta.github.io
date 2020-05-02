import React, {useState, useCallback} from 'react'
import BaseLayout from '../base-layout'
import Sidebar from '../sidebar'
import ProfilePhoto from '../profile-photo'
import Main from '../main'
import {DEFAULT_SECTION, TRANSITION_CLASS} from 'utils'

import './App.scss'

const App = () => {
  const [section, setSection] = useState({previous: DEFAULT_SECTION, current: DEFAULT_SECTION})
  const [isInTransition, setIsInTransition] = useState(false)

  const onSelect = useCallback(({target: {dataset}}) => {
    const selected = Number(dataset.section)
    const {current} = section
    
    if (selected !== current) {
      setIsInTransition(true)
      setSection({previous: current, current: selected})
    }
  }, [section])

  const onTransitionEnd = useCallback(({target: {className}}) => {
    if (className.includes(TRANSITION_CLASS)) setIsInTransition(false)
  }, [])

  return (
  <div className="App">
    <BaseLayout>
      <Sidebar
        activeSection={section.current}
        onSelect={onSelect} />
      <ProfilePhoto />
      <Main
        className={isInTransition ? TRANSITION_CLASS : ''}
        activeSection={isInTransition ? section.previous : section.current}
        onTransitionEnd={onTransitionEnd} />
    </BaseLayout>
  </div>
  )
}

App.displayName = 'App'

export default App
