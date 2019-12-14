import React from 'react'

import User from '../User'
import exchange from '../../images/exchange.png'

import './style.scss'

const Results = ({users=[]}) => {
  return (
    <div className="result-row">
      <User user={users[0]} />
      <img src={exchange} className="result-row__gift-img"/>
      <User user={users[1]} />
    </div>
  )
}

export default Results