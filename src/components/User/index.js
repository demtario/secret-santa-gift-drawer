import React from 'react'
import './style.css'

const defaultUser = {
  name: 'John',
  image: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'
}

const User = ({user=defaultUser}) => {
  return (
    <div className="user">
      <img src={user.image} alt={`${user.name} image`} className="user__image"/>
      <h2 className="user__name">{user.name}</h2>
    </div>
  )
}

export default User