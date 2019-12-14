import React, { useMemo } from 'react'

import './style.css'

const Button = ({text="Press me!", size="", onClick}) => {
  const className = useMemo(() => {
    const baseClass = 'btn'
    switch(size) {
      case 'small':
        return `${baseClass} ${baseClass}--sm`
      case 'big':
        return `${baseClass} ${baseClass}--xl`
      case 'normal':
      default:
        return baseClass
    }
  }, [size])

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button