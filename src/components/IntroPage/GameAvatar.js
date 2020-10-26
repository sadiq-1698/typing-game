import React from 'react';

const GameAvatar = () => {
    return (
      <div className="avatar-container">
        <h1>Type it!</h1>
        <img src={process.env.PUBLIC_URL + '/game-avatar.png'} alt="game-logo" width="200px" height="200px"/>
      </div>
    );
}
  
export default GameAvatar;
