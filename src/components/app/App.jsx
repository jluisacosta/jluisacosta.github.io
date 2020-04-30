import React, {useState, useCallback} from 'react'
import BaseLayout from '../base-layout'
import Sidebar from '../sidebar'
import ProfilePhoto from '../profile-photo'
import Main from '../main'
import {DEFAULT_SECTION} from 'utils'

import './App.scss'

const App = () => {
  const [activeSection, setActiveSection] = useState(DEFAULT_SECTION)
  const onSelect = useCallback(e => setActiveSection(Number(e.target.dataset.section)), [])

  return (
  <div className="App">
    <BaseLayout>
      <Sidebar activeSection={activeSection} onSelect={onSelect} />
      <ProfilePhoto />
      <Main activeSection={activeSection} />
    </BaseLayout>
  </div>
  )
}

App.displayName = 'App'

export default App
