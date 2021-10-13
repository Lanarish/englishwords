import React, { useState, useEffect } from 'react';
import Card from './Card';
import Loader from './Loader';
import { useWordsContext } from './Context';
import './styles/card.css';
import words from './assets/words.json'



function CardsList() {
    const { words, isLoading, error } = useWordsContext()


    return (
        <Loader isLoading={isLoading} error={error}>
            <div className="list">
                {words?.length &&
                    words.map((card) => (
                        <Card
                            key={card.id}
                            english={card.english}
                            transcription={card.transcription}
                            russian={card.russian}
                            pressed={card.pressed}
                        ></Card>
                    ))
                }
            </div>
        </Loader>
    );
}


export default CardsList;