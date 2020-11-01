import React from 'react';
import './styles.css';

const DialogBox = (props) => {

    const loseMessage = [
        "You are a total noob",
        "Facepalm",
        "Shame!",
        "Just stop it!",
        "What a clown!"
    ];

    const winMessage = [
        "Daaamn, that's impressive!",
        "You should totally do data entry!",
        "Legend!",
        "Bhayangara",
        "Majjayini"
    ];

    function chooseRandomMessage(array){
        let dialogMessage = array[Math.floor(Math.random() * array.length)];
        return dialogMessage;
    }

    return (
        <div className={`dialog-page ${props.timer >= 0 || props.timer <= -51 ? "display" : ""}`}>
            <div className="dialog-box">
                <h1 style={{textAlign:"center"}}>{props.timer >= 0 ? chooseRandomMessage(winMessage) : chooseRandomMessage(loseMessage)}</h1>
                <button onClick={() => window.location.reload()}>Play Again</button>
            </div>
        </div>
    )
}

export default DialogBox;
