import React from 'react'

import User from '../User'

import './style.scss'

const Results = ({users=[]}) => {
  return (
    <div className="result-row">
      <User user={users[0]} />
      <img src="/exchange.png" className="result-row__gift-img"/>
      <User user={users[1]} />
    </div>
  )
}

export default Results