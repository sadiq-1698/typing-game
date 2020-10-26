import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const Difficulty = () => {

    const { setEnableStartButton, setDifficulty } = useContext(ShowGame);

    const updateDifficulty = (level) => {
        setEnableStartButton(true);
        setDifficulty(level);
    } 

    return (
        <div id="difficulty" className="difficulty">
            <label className="easy"><input type="radio" name="difficulty" onChange={()=> updateDifficulty(3)} /><span>Easy</span></label>
            <label className="medium"><input type="radio" name="difficulty" onChange={()=> updateDifficulty(2)}/><span>Medium</span></label>
            <label className="hard"><input type="radio" name="difficulty" onChange={()=> updateDifficulty(1)}/><span>Hard</span></label>
        </div>
    );
}

export default Difficulty;

  