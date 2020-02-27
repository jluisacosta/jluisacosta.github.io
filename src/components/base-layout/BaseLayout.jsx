import React from 'react'
import PropTypes from 'prop-types'

import './BaseLayout.scss'

const BaseLayout = ({children}) =>
  <div className="BaseLayout container">
    {children}
  </div>

BaseLayout.displayName = 'BaseLayout'

BaseLayout.propTypes = {
  children: PropTypes.any
}

export default BaseLayout
