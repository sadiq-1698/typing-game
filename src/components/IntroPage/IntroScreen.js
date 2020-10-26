import React from 'react';
import GameAvatar from './GameAvatar';
import Difficulty from './Difficulty';
import StartGame from './StartGame';
import './styles.css';

const IntroScreen = () => {
    return (
      <> 
        <GameAvatar />
        <Difficulty />
        <StartGame />
      </>
    );
  }

export default IntroScreen
