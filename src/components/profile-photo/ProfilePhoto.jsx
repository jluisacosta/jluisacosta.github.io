import React from 'react'
import profilePhoto from 'static/images/profile-photo.jpg'

import './ProfilePhoto.scss'

const ProfilePhoto = () =>
  <div className="ProfilePhoto is-flex has-text-centered" style={{backgroundImage: `url(${profilePhoto})`}}>
    <h2 className="ProfilePhoto-title">José Luis Acosta</h2>
    <h5 className="ProfilePhoto-subtitle">Web Developer</h5>
    <ul className="ProfilePhoto-socialMedia is-flex">
      <li className="ProfilePhoto-icon"><i className="fab fa-linkedin" /></li>
      <li className="ProfilePhoto-icon"><i className="fab fa-github" /></li>
    </ul>
  </div>

ProfilePhoto.displayName = 'ProfilePhoto'

export default ProfilePhoto
