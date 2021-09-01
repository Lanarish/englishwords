import React from 'react';
import './styles/tableList.css';



const words = [
    { id: "1", word: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
    { id: "2", word: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
    { id: "3", word: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино", isSelected: true },
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
                    {words.map((table) => (
                        <tr>
                            <td>{table.id}</td>
                            <td>{table.word}</td>
                            <td>{table.transcription}</td>
                            <td>{table.translation}</td>
                            <td>
                                {table.isSelected ? (
                                    <div >
                                        <button className="table_button">Save</button>
                                        <button className="table_button">Cansel</button>
                                    </div>
                                ) : (
                                    <div >
                                        <button className="table_button">Delete</button>
                                        <button className="table_button">Edit</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default TableList;