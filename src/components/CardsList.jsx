import React from 'react';
import Card from './Card';
import './styles/card.css';
import words from './assets/words.json'



// const words = [
//     { id: "1", word: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
//     { id: "2", word: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
//     { id: "3", word: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино", isSelected: true },
//     { id: "4", word: "world", transcription: "[ wɜːld ]", translation: "мир" },
//     { id: "5", word: "boy ", transcription: "[ bɔɪ ] ", translation: "мальчик" },
//     { id: "6", word: "life", transcription: "[ laɪf ] ", translation: "жизнь" },
//     { id: "7", word: "friend", transcription: " [ frend ] ", translation: "друг" },
//     { id: "8", word: "family ", transcription: "[ ˈfæm. ə l.i ] ", translation: "семья" },
//     { id: "9", word: "window", transcription: "[ ˈwɪn.dəʊ ] ", translation: "окно" }

// ];

function CardsList() {
    return (
        <div className="list">
            {
                words.map(card => (
                    <Card
                        english={card.english}
                        transcription={card.transcription}
                        translation={card.translation}></Card>
                ))
            }
        </div>
    );
}


export default CardsList;