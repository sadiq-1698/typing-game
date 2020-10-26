import React from 'react';

const Difficulty = () => {
    return (
      <div id="difficulty" className="difficulty">
        <label class="easy"><input type="radio" name="difficulty" /><span>Easy</span></label>
        <label class="medium"><input type="radio" name="difficulty" /><span>Medium</span></label>
        <label class="hard"><input type="radio" name="difficulty" /><span>Hard</span></label>
    </div>
    );
}

export default Difficulty;

  