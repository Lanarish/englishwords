import React, { useState } from 'react';
import './styles/card.css'



function Card(props) {
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);
    }
    const { english, transcription, translation } = props;
    return (
        <div className="card">
            <div className="word">{english}</div>
            <div className="transcription">{transcription}</div>
            {pressed
                ? <div className="translation"> {translation} </div>
                : <button className="button-translate" onClick={handleClick}> Translate </button>
            }
        </div >
    );
}

export default Card;