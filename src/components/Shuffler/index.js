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
    const from = shuffle([...NAMES])
    let to = shuffle([...NAMES])
    while(from.some(({id}, i) => to[i].id === id)) {
      to = shuffle([...NAMES])
    }

    return [
      from,
      to
    ]
  }, [])

  const pageUsers = useMemo(() => {
    return [
      shuffledArray[0][page-1],
      shuffledArray[1][page-1]
    ]
  }, [page, shuffledArray])

  return (
    <div className="shuffler">
      <Header text="Results:" />
      <Results users={pageUsers} />
      <div className="flex">
        { page > 1 &&
          <Button text='Back' size="small" type="grayed" onClick={() => setPage(page-1)} />
        }
        { page < NAMES.length &&
          <Button text='Next' size="small" onClick={() => setPage(page+1)} />
        }
      </div>
    </div>
  )
}

export default Shuffler