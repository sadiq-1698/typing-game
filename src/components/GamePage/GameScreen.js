import React, { useContext } from 'react';
import InputField from './InputField';
import Word from './Word';
import FillBar from './FillBar';
import './styles.css';
import DialogBox from '../DialoguePage/DialogBox';
import ShowGame from '../../contexts/ShowGame';
import AppHeader from '../IntroPage/AppHeader';

const GameScreen = () => {

  const { timer } = useContext(ShowGame);

    return (
      <>
        <AppHeader />
        <FillBar />
        <Word />
        <InputField />
        <DialogBox timer={timer}/>
      </>
    );
  }

export default GameScreen;
