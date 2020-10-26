import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const InputField = () => {

  const { currentWord, setCurrentWord, words, setTimer, difficulty } = useContext(ShowGame);

  function chooseRandomWord(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    return randomWord;
  }

  const onWordMatch = (e) => {
    if(e.target.value.toLowerCase() === currentWord){
      e.target.value="";
      chooseRandomWord();
      setTimer((prev) => prev + difficulty);
    }
  }

    return (
      <input 
        className="input-field"
        type="text"
        placeholder="type here"
        autoFocus={true}
        onChange={(e)=> onWordMatch(e)}
      />
    );
  }

export default InputField;
