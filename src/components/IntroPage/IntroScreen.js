import React from 'react';
import AppHeader from './AppHeader';
import Difficulty from './Difficulty';
import StartGame from './StartGame';
import './styles.css';

const IntroScreen = () => {
    return (
      <> 
        <AppHeader />
        <Difficulty />
        <StartGame />
      </>
    );
  }

export default IntroScreen
