import React from 'react';
import Card from './Card';
import './styles/card.css'



const words = [
    { word: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
    { word: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
    { word: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино", isSelected: true },
    { word: "world", transcription: "[ wɜːld ]", translation: "мир" },
    { word: "boy ", transcription: "[ bɔɪ ] ", translation: "мальчик" },
    { word: "life", transcription: "[ laɪf ] ", translation: "жизнь" },
    { word: "friend", transcription: " [ frend ] ", translation: "друг" },
    { word: "family ", transcription: "[ ˈfæm. ə l.i ] ", translation: "семья" },
    { word: "window", transcription: "[ ˈwɪn.dəʊ ] ", translation: "окно" }

];

function WordsList() {
    return (
        <div className="list">
            {
                words.map(card => (
                    <Card
                        word={card.word}
                        transcription={card.transcription}></Card>
                    // translation={card.translation} />

                ))
            }
        </div>
    );
}


export default WordsList;