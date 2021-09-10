import React, { useState } from 'react';
import './styles/tableList.css';
import TableButton from './TableButton';


function Table({ word }) {
    const { id, english, transcription, translation } = word;
    const [isPressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        id,
        english,
        transcription,
        translation
    });

    const handleChange = (e) => {
        setValue((prevWord) => {
            return { ...prevWord, [e.target.name]: e.target.value };
        });
    };

    const handleCancel = () => {
        setPressed(!isPressed);
        setValue({ ...word });

    };

    const handleEdit = () => {
        setPressed(!isPressed);
    }
    return (

        <tr>
            <td>{id}</td>
            {isPressed
                ? (
                    <>
                        <td>
                            <input type="text"
                                onChange={handleChange}
                                value={value.english}
                                name="english">
                            </input>
                        </td>
                        <td>
                            <input type="text"
                                onChange={handleChange}
                                value={value.transcription}
                                name="transcription">
                            </input>
                        </td>
                        <td>
                            <input type="text"
                                onChange={handleChange}
                                value={value.translation}
                                name="translation">
                            </input>
                        </td>
                    </>
                )
                : (
                    <>
                        <td>{value.english}</td>
                        <td>{value.transcription}</td>
                        <td>{value.translation}</td>
                    </>
                )}

            <td >
                {isPressed
                    ? (
                        <div>
                            <TableButton name={"Save"}
                                onClick={() => {
                                    setPressed(false);
                                }} />
                            <TableButton name={"Cancel"}
                                onClick={handleCancel} />
                        </div>)
                    : (
                        <div >
                            <TableButton name={"Delete"} />
                            <TableButton name={"Edit"}
                                onClick={handleEdit} />
                        </div>
                    )}
            </td>
        </tr>
    );
}





export default Table;