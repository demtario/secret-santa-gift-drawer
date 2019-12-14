import React, { useMemo, useState } from 'react'

import Header from '../Header'
import Button from '../Button'
import Results from '../Results'

import NAMES from '../../config/users'

import './style.scss'

const shuffle = (a=[]) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Shuffler = () => {
  const [page, setPage] = useState(1)

  const shuffledArray = useMemo(() => {
    return shuffle(NAMES)
  }, [])

  const pageUsers = useMemo(() => {
    return [
      shuffledArray[page*2-2],
      shuffledArray[page*2-1]
    ]
  }, [page])

  return (
    <div className="shuffler">
      <Header text="Results:" />
      <Results users={pageUsers} />
      { page*2 < shuffledArray.length &&
        <Button text='Next' size="small" onClick={() => setPage(page+1)} />
      }
    </div>
  )
}

export default Shuffler