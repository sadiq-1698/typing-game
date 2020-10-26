import React from 'react';
import InputField from './InputField';
import Word from './Word';
import FillBar from './FillBar';
import Header from './Header';
import './styles.css';

const GameScreen = () => {
    return (
      <>
        <Header />
        <FillBar />
        <Word />
        <InputField />
      </>
    );
  }

export default GameScreen;
