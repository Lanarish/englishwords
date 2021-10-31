import React, { useEffect, useState } from 'react';
import '../Table/tableList.scss';
import useValidation from '../../hooks/useValidation';
import TableButton from '../Table/TableButton';


function Table({ word, handleDelete, handleSave }) {
    const { formErrors, formValid, isDisabled, setIsDisabled, validateField } = useValidation();
    const { id, english, transcription, russian } = word;
    const [isPressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        id,
        english,
        transcription,
        russian,
    });

    useEffect(() => {
        if (formValid.english || formValid.russian || formValid.transcription) {
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


    const handleCancel = () => {
        setPressed(!isPressed);
        setValue({ ...word });
    };
    const updateWord = () => {
        handleSave(value);
        setPressed(false);
    }

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
                                className="input-field"
                                onChange={handleChange}
                                value={value.english}
                                name="english">
                            </input>
                        </td>
                        <td>{(formValid.transcription && formErrors.transcription) && <div style={{ color: 'red' }}>{formErrors.transcription}</div>}
                            <input type="text"
                                className="input-field"
                                onChange={handleChange}
                                value={value.transcription}
                                name="transcription">
                            </input>
                        </td>
                        <td>{(formValid.russian && formErrors.russian) && <div style={{ color: 'red' }}>{formErrors.russian}</div>}
                            <input type="text"
                                className="input-field"
                                onChange={handleChange}
                                value={value.russian}
                                name="russian">
                            </input>
                        </td>
                    </>
                )
                : (
                    <>
                        <td>{value.english}</td>
                        <td>{value.transcription}</td>
                        <td>{value.russian}</td>
                    </>
                )}

            <td >
                {isPressed
                    ? (
                        <div>
                            <TableButton
                                name={"Save"}
                                disabled={isDisabled}
                                onClick={updateWord}
                            //onClick={() => { setPressed(false); }}
                            />
                            <TableButton
                                name={"Cancel"}
                                onClick={handleCancel} />
                        </div>)
                    : (
                        <div >
                            <TableButton
                                name={"Delete"}
                                onClick={() => handleDelete(id)} />
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