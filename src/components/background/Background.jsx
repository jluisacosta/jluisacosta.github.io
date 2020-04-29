import React from 'react'
import PropTypes from 'prop-types'

import './Background.scss'

const FLOATING_ITEMS = [
  ['25%', '80px', '80px', '0s'],
  ['10%', '20px', '20px', '2s', '12s'],
  ['70%', '20px', '20px', '4s'],
  ['40%', '60px', '60px', '0s', '18s'],
  ['65%', '20px', '20px', '0s'],
  ['75%', '10px', '10px', '3s'],
  ['35%', '50px', '50px', '7s'],
  ['50%', '25px', '25px', '5s', '45s'],
  ['20%', '15px', '15px', '2s', '35s'],
  ['85%', '50px', '50px', '0s', '11s']
]

const Background = ({children}) =>
  <div className="Background">
    <div className="Background-floatingContainer">
      {
        FLOATING_ITEMS.map(([left, width, height, animationDelay, animationDuration], i) =>
          <div
            key={`bg-square-${i}`}
            className="Background-square"
            style={{left, width, height, animationDelay, animationDuration}}>
          </div>
        )
      }
    </div>
    {children}
  </div>

Background.displayName = 'Background'

Background.propTypes = {
  children: PropTypes.any
}

export default Background

