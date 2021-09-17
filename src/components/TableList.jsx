import React from 'react';
import './styles/tableList.css';
import Table from './Table';
import words from './assets/words.json'



// const words = [
//     { id: "1", english: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
//     { id: "2", english: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
//     { id: "3", english: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино" },
//     { id: "4", english: "world", transcription: "[ wɜːld ]", translation: "мир" },
//     { id: "5", english: "boy ", transcription: "[ bɔɪ ] ", translation: "мальчик" },
//     { id: "6", english: "life", transcription: "[ laɪf ] ", translation: "жизнь" },
//     { id: "7", english: "friend", transcription: " [ frend ] ", translation: "друг" },
//     { id: "8", english: "family ", transcription: "[ ˈfæm. ə l.i ] ", translation: "семья" },
//     { id: "9", english: "window", transcription: "[ ˈwɪn.dəʊ ] ", translation: "окно" }

// ];


function TableList() {

    return (
        <div className="tableList">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                        <th>Delete/Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(word => (
                        <Table
                            key={word.id}
                            word={word} />

                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableList;