import React from 'react';
import Card from './Card';
import './styles/card.css';
import words from './assets/words.json'



function CardsList() {

    return (
        <div className="list">
            {
                words.map(card => (
                    <Card
                        english={card.english}
                        transcription={card.transcription}
                        translation={card.translation}

                    ></Card>
                ))
            }
        </div>
    );
}


export default CardsList;