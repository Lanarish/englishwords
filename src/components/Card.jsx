import React from 'react';
import { getContext } from './Context';
import './styles/card.css'



function Card({ english, transcription, russian, pressed, handleClick, cardref }) {


    return (
        <div className="card">
            <div className="word">{english}</div>
            <div className="transcription">{transcription}</div>
            {pressed
                ? <div className="translation"> {russian} </div>
                : <button className="button-translate" onClick={handleClick} ref={cardref}> Translate </button>
            }
        </div >
    );
}

export default Card;