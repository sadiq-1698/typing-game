import React, { useContext, useEffect } from 'react';
import ShowGame from '../../contexts/ShowGame';

const FillBar = () => {

    const { timer, setTimer } = useContext(ShowGame);

    useEffect(() => {
        if(timer >= 0 || timer <= -51)
            return;
        const counter = setTimeout(() => setTimer((prev) => prev - 1), 1000);
        return () => clearTimeout(counter);
      }, [timer, setTimer]);

    return (
        <div className="fill-bar-container">
            <div className="fill-bar">
                <div 
                    className="filler"
                    style={{
                        width : `${((50 + timer) / 50 * 100)}%`
                    }}
                ></div>
            </div>
        </div>
    );
}

export default FillBar;