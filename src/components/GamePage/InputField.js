import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const InputField = () => {

  const { currentWord, setCurrentWord, words, setTimer, timer, difficulty } = useContext(ShowGame);

  function chooseRandomWord(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    return randomWord;
  }

  const onWordMatch = (e) => {
    if(e.target.value.toLowerCase().trim() === currentWord){
      e.target.value="";
      chooseRandomWord();
      setTimer((prev) => prev + difficulty);
    }
  }

    return (
      <div className="input-container">
        <input 
          className="input-field"
          type="text"
          placeholder="Type here. . ."
          autoFocus={true}
          onChange={(e)=> onWordMatch(e)}
          disabled={timer <= -51}
        />
      </div>
    );
  }

export default InputField;
