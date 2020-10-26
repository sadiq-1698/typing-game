import React, { useContext } from 'react';
import ShowGame from '../../contexts/ShowGame';

const Word = () => {

    const { currentWord } = useContext(ShowGame);

    return (
        <div className="the-word">
            <h2>{currentWord}</h2>
        </div>
    )
}

export default Word;
