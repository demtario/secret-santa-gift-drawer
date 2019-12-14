import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const defaultUser = {
  name: 'John',
  image: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'
}

const User = ({user=defaultUser}) => {
  const [current, setCurrent] = useState(user)
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    setFaded(true)
    setTimeout(() => {
      setCurrent(user)
      setFaded(false)
    }, 300)
  }, [user])

  return (
    <div className={`user ${faded && 'user--fade-out'}`}>
      <img src={current.image} alt={`${current.name} image`} className="user__image"/>
      <h2 className="user__name">{current.name}</h2>
    </div>
  )
}

export default User