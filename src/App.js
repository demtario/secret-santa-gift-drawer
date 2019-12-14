import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import Header from './components/Header';
import Loader from './components/Loader';
import Shuffler from './components/Shuffler';

import './App.scss';

const App = () => {
  const [screen, setScreen] = useState('init')

  useEffect(() => {
    if(screen === 'shuffle') {
      setTimeout(() => {
        setScreen('results')
      }, 500);
    }
  }, [screen])

  return (
    <div className="app">
      <div className={`screen ${screen === 'init' && 'screen--active'}`}>
        <Header />
        <Button text='Losu losu' onClick={() => setScreen('shuffle')} />
      </div>
      <div className={`screen ${screen === 'shuffle' && 'screen--active'}`}>
        <div className="shuffle">
          <Header text="Shuffle shuffle..." />
          <div className="shuffle__box">
            <Loader />
          </div>
          </div>
        </div>
      <div className={`screen ${screen === 'results' && 'screen--active'}`}>
        <Shuffler />
      </div>
    </div>
  );
}

export default App;
