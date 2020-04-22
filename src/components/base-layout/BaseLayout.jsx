import React from 'react'
import PropTypes from 'prop-types'

import './BaseLayout.scss'

const SIDEBAR = 0
const PROFILE_PHOTO = 1
const MAIN = 2

const BaseLayout = ({children}) =>
  <div className="BaseLayout container">
    <div className="BaseLayout-sideBar">{children[SIDEBAR]}</div>
    <div className="BaseLayout-profilePhoto">{children[PROFILE_PHOTO]}</div>
    <div className="BaseLayout-main">{children[MAIN]}</div>
  </div>

BaseLayout.displayName = 'BaseLayout'

BaseLayout.propTypes = {
  children: PropTypes.any
}

export default BaseLayout
