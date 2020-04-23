import React from 'react'
import Background from '../background'
import BaseLayout from '../base-layout'
import Sidebar from '../sidebar'
import ProfilePhoto from '../profile-photo'
import Main from '../main'

const App = () =>
  <div className="App">
    <Background>
      <BaseLayout>
        <Sidebar />
        <ProfilePhoto />
        <Main />
      </BaseLayout>
    </Background>
  </div>

App.displayName = 'App'

export default App
