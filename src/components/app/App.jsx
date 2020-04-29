import React from 'react'
import BaseLayout from '../base-layout'
import Sidebar from '../sidebar'
import ProfilePhoto from '../profile-photo'
import Main from '../main'

import './App.scss'

const App = () =>
  <div className="App">
    <BaseLayout>
      <Sidebar />
      <ProfilePhoto />
      <Main />
    </BaseLayout>
  </div>

App.displayName = 'App'

export default App
