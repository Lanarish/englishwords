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

    const [formErrors, setFormErrors] = useState({
        english: '',
        transcription: '',
        translation: ''
    });

    const [formValid, setFormValid] = useState({
        english: false,
        transcription: false,
        translation: false
    });

    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        if (formValid.english || formValid.translation || formValid.transcription) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [formValid])



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        validateField(name, value);
        setValue((prevWord) => {
            return { ...prevWord, [name]: value };
        });

    };

    const validateField = (name, value) => {
        if (value === "") {
            setFormValid({ ...formValid, [name]: true })
            setFormErrors({ ...formErrors, [name]: "Field is empty!" })
        } else {
            switch (name) {
                case "english":
                    if (value.match(/^[A-Za-z0-9]*$/)) {
                        setFormValid({ ...formValid, english: false })
                        setFormErrors({ ...formErrors, english: '' })
                    } else {
                        setFormValid({ ...formValid, english: true })
                        setFormErrors({ ...formErrors, english: "Just on latin!" })
                    }
                    break;
                case "transcription":
                    if (value.match(/^[A-Za-z0-9]*$/)) {
                        setFormValid({ ...formValid, transcription: false })
                        setFormErrors({ ...formErrors, transcription: '' })
                    } else {
                        setFormValid({ ...formValid, transcription: true })
                        setFormErrors({ ...formErrors, transcription: "Just on latin!" })
                    }
                    break;
                case "translation":
                    if (value.match(/^[а-яё -]+$/i)) {
                        setFormValid({ ...formValid, translation: false })
                        setFormErrors({ ...formErrors, translation: '' })
                    } else {
                        setFormValid({ ...formValid, translation: true })
                        setFormErrors({ ...formErrors, translation: "Just on cyrillic!" })
                    }
                    break;
            }
        }
    }

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
                            {(formValid.english && formErrors.english) && <div style={{ color: 'red' }}>{formErrors.english}</div>}
                            <input type="text"
                                onChange={handleChange}
                                value={value.english}
                                name="english">
                            </input>
                        </td>
                        <td>{(formValid.transcription && formErrors.transcription) && <div style={{ color: 'red' }}>{formErrors.transcription}</div>}
                            <input type="text"
                                onChange={handleChange}
                                value={value.transcription}
                                name="transcription">
                            </input>
                        </td>
                        <td>{(formValid.translation && formErrors.translation) && <div style={{ color: 'red' }}>{formErrors.translation}</div>}
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
                            <TableButton
                                name={"Save"}
                                disabled={isDisabled}
                                onClick={() => { setPressed(false); }}
                            />
                            <TableButton
                                name={"Cancel"}
                                onClick={handleCancel} />
                        </div>)
                    : (
                        <div >
                            <TableButton
                                name={"Delete"} />
                            <TableButton
                                name={"Edit"}
                                onClick={handleEdit} />
                        </div>
                    )}
            </td>
        </tr>
    );
}





export default Table;