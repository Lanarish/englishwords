import React, { useEffect, useState } from 'react';
import './styles/tableList.css';
import TableButton from './TableButton';


function Table({ word }) {
    const { id, english, transcription, translation } = word;
    const [isPressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        id,
        english,
        transcription,
        translation,
    });
    const [isFilled, setIsFilled] = useState({
        english: false,
        transcription: false,
        translation: false
    })

    const [error, setError] = useState("Поле не может быть пустым!")

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (error) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [error])

    const handleChange = (e) => {
        setValue((prevWord) => {
            return { ...prevWord, [e.target.name]: e.target.value };
        });
        if (e.target.value === '') {
            setIsFilled({ ...isFilled, [e.target.name]: true })

        } else {
            setIsFilled({ ...isFilled, [e.target.name]: false })
        }
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
                            {(isFilled.english && error) && <div style={{ color: 'red' }}>{error}</div>}
                            <input type="text"
                                onChange={handleChange}
                                // onBlur={e => blurHandler(e)}
                                value={value.english}
                                name="english">
                            </input>
                        </td>
                        <td>
                            {(isFilled.transcription && error) && <div style={{ color: 'red' }}>{error}</div>}
                            <input type="text"
                                onChange={handleChange}
                                // onBlur={e => blurHandler(e)}
                                value={value.transcription}
                                name="transcription">
                            </input>
                        </td>
                        <td>
                            {(isFilled.translation && error) && <div style={{ color: 'red' }}>{error}</div>}
                            <input type="text"
                                onChange={handleChange}
                                // onBlur={e => blurHandler(e)}
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
                                disabled={!formValid}
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