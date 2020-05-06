import React from 'react'
import PropTypes from 'prop-types'

import './BaseLayout.scss'

const LAYOUT_SECTIONS = {
  Sidebar: 0,
  ProfilePhoto: 1,
  Main: 2
}

const BaseLayout = ({children}) =>
  <div className="BaseLayout container">
    <div className="BaseLayout-columns columns is-mobile is-gapless">
      <aside className="BaseLayout-sidebar column is-narrow">
        {children[LAYOUT_SECTIONS.Sidebar]}
      </aside>
      <figure className="BaseLayout-profilePhoto column is-hidden-mobile">
        {children[LAYOUT_SECTIONS.ProfilePhoto]}
      </figure>
      <main className="BaseLayout-main column">
        {children[LAYOUT_SECTIONS.Main]}
      </main>
    </div>
  </div>

BaseLayout.displayName = 'BaseLayout'

BaseLayout.propTypes = {
  children: PropTypes.any
}

export default BaseLayout
