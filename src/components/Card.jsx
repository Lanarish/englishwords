import React from 'react';
import './styles/card.css'



function Card({ english, transcription, translation, pressed, handleClick, cardref }) {
    // const [pressed, setPressed] = useState(false);

    // const handleClick = () => {
    //     words[id].pressed = true;
    // }
    // const { english, transcription, translation, pressed, handleClick } = props;

    return (
        <div className="card">
            <div className="word">{english}</div>
            <div className="transcription">{transcription}</div>
            {pressed
                ? <div className="translation"> {translation} </div>
                : <button className="button-translate" onClick={handleClick} ref={cardref}> Translate </button>
            }
        </div >
    );
}

export default Card;