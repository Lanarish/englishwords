import React from 'react';
import './styles/tableList.css'

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


function TableList(props) {
    const { word, transcription, translation } = props;
    return (
        <div className="tableList">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                        <th>Delete/Remark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{word}</td>
                        <td>{transcription}</td>
                        <td>{translation}</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Library</td>
                        <td>[ˈlaɪbrəri]n</td>
                        <td>Библиотека</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cinema</td>
                        <td>[ ˈsɪnəmə ]</td>
                        <td>Кино</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Butterfly</td>
                        <td>[ˈbʌtəflaɪ]</td>
                        <td> Бабочка</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Library</td>
                        <td>[ˈlaɪbrəri]n</td>
                        <td>Библиотека</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Cinema</td>
                        <td>[ ˈsɪnəmə ]</td>
                        <td>Кино</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Butterfly</td>
                        <td>[ˈbʌtəflaɪ]</td>
                        <td> Бабочка</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Library</td>
                        <td>[ˈlaɪbrəri]n</td>
                        <td>Библиотека</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Cinema</td>
                        <td>[ ˈsɪnəmə ]</td>
                        <td>Кино</td>
                        <td><button>Delete</button> <button>Remark</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TableList;