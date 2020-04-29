import React from 'react'
import profilePhoto from 'static/images/profile-photo.jpg'

import './ProfilePhoto.scss'

const ProfilePhoto = () =>
  <div
    className="ProfilePhoto is-flex has-text-centered"
    style={{backgroundImage: `url(${profilePhoto})`}}>
    <h1 className="ProfilePhoto-title">
      <strong>José Luis Acosta</strong>
    </h1>
    <h2 className="ProfilePhoto-subtitle">
      <strong>Web Developer</strong>
    </h2>
  </div>

ProfilePhoto.displayName = 'ProfilePhoto'

export default ProfilePhoto
