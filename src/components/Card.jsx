import React from 'react';
import './styles/card.css'



function Card(props) {
    const { word, transcription, translation } = props;
    return (
        <div className="card">
            <div className="word">{word}</div>
            <div className="transcription">{transcription}</div>
            {/* <div className="translation">{translation}</div> */}
            <button className="button-translate">Translate</button>
        </div >
    );
}

export default Card;