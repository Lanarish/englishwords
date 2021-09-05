import React from 'react';
import './styles/tableList.css';
import Table from './Table';




const words = [
    { id: "1", word: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
    { id: "2", word: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
    { id: "3", word: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино" },
    { id: "4", word: "world", transcription: "[ wɜːld ]", translation: "мир" },
    { id: "5", word: "boy ", transcription: "[ bɔɪ ] ", translation: "мальчик" },
    { id: "6", word: "life", transcription: "[ laɪf ] ", translation: "жизнь" },
    { id: "7", word: "friend", transcription: " [ frend ] ", translation: "друг" },
    { id: "8", word: "family ", transcription: "[ ˈfæm. ə l.i ] ", translation: "семья" },
    { id: "9", word: "window", transcription: "[ ˈwɪn.dəʊ ] ", translation: "окно" }

];


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
                    {words.map(table => (
                        <Table
                            id={table.id}
                            word={table.word}
                            transcription={table.transcription}
                            translation={table.translation}>
                        </Table>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableList;