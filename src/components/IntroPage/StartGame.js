import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const StartGame = () => {

  const { setShowGame, enableStartButton, setCurrentWord, words }  = useContext(ShowGame);

  function setUpGame(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setShowGame((prev) => !prev);
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