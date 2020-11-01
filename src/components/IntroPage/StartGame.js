import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const StartGame = () => {

  const { setShowGame, enableStartButton, setCurrentWord, words, showGame, currentWord }  = useContext(ShowGame);

  function setUpGame(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setShowGame(true);
    console.log(showGame);
    console.log(currentWord);
  }

    return (
      <div className="start-game-button">
        <button disabled={!enableStartButton} className={enableStartButton ? "btn active" : "btn"} onClick={() => setUpGame()}>
          Start game
        </button>
      </div>
    );
}

export default StartGame;