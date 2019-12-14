import React, { useMemo } from 'react'

import './style.scss'

const Button = ({text="Press me!", size="", onClick, type="primary", className=""}) => {
  const baseClass = 'btn'

  const sizeClass = useMemo(() => {
    switch(size) {
      case 'small':
        return `${baseClass}--sm`
      case 'big':
        return `${baseClass}--xl`
      case 'normal':
      default:
        return ''
    }
  }, [size])

  const typeClass = useMemo(() => {
    switch(type) {
      case 'grayed':
        return `${baseClass}--grayed`
      case 'primary':
      default:
        return ''
    }
  }, [type])

  return (
    <button className={`${baseClass} ${sizeClass} ${typeClass} ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button