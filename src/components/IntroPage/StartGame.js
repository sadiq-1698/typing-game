import React from 'react';

const StartGame = () => {
    return (
      <div className="start-game-button">
        <button disabled={true} className="btn" onClick={() => console.log("clicked")}>
          Start game
        </button>
      </div>
    );
}

export default StartGame;