import React, { useContext } from 'react';
import InputField from './InputField';
import Word from './Word';
import FillBar from './FillBar';
import Header from './Header';
import './styles.css';
import DialogBox from '../DialoguePage/DialogBox';
import ShowGame from '../../contexts/ShowGame';

const GameScreen = () => {

  const { timer } = useContext(ShowGame);

    return (
      <>
        <Header />
        <FillBar />
        <Word />
        <InputField />
        <DialogBox timer={timer}/>
      </>
    );
  }

export default GameScreen;
