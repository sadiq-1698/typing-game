import React from 'react';
import './styles.css';

const DialogBox = (props) => {

    return (
        <div className={props.timer >= 0 ? "dialog-page display" : "dialog-page"}>
            <div className="dialog-box">
                <h1>Message</h1>
                <button>Play Again</button>
            </div>
        </div>
    )
}

export default DialogBox;
