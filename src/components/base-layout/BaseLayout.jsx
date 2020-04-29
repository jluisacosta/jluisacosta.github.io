import React from 'react'
import PropTypes from 'prop-types'

import './BaseLayout.scss'

const SIDEBAR = 0
const PROFILE_PHOTO = 1
const MAIN = 2

const BaseLayout = ({children}) =>
  <div className="BaseLayout container">
    <div className="BaseLayout-columns columns is-mobile is-gapless">
      <aside className="BaseLayout-sidebar column is-narrow">
        {children[SIDEBAR]}
      </aside>
      <div className="BaseLayout-profilePhoto column is-hidden-mobile">
        {children[PROFILE_PHOTO]}
      </div>
      <div className="BaseLayout-main column">
        {children[MAIN]}
      </div>
    </div>
  </div>

BaseLayout.displayName = 'BaseLayout'

BaseLayout.propTypes = {
  children: PropTypes.any
}

export default BaseLayout
