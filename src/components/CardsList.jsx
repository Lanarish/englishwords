import React from 'react';
import Card from './Card';
import './styles/card.css';
import words from './assets/words.json'



function CardsList() {

    words.forEach((elem) => elem.pressed = false);

    const handleClick = (index) => {
        words[index].pressed = true;

    }

    return (
        <div className="list">
            {
                words.map((card, index) => (
                    <Card
                        key={card.id}
                        english={card.english}
                        transcription={card.transcription}
                        translation={card.translation}
                        pressed={card.pressed}
                        handleClick={handleClick}
                        index={index}
                    ></Card>
                ))
            }
        </div>
    );
}


export default CardsList;