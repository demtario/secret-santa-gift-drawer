import React from 'react'
import './style.css'

const Header = ({text="Secret Santa Gift Drawer"}) => {
  return (
    <header className="header">
      <h1 className="header__title">{text}</h1>
    </header>
  )
}

export default Header