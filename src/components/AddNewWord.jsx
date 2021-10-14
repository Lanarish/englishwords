import React, { useState, useEffect } from 'react';
import TableButton from './TableButton';
import useValidation from '../hooks/useValidation';
import { useWordsContext } from './Context';
import './styles/addWordForm.scss'

const AddNewWord = () => {
    const { formErrors, formValid, isDisabled, setIsDisabled, validateField } = useValidation();

    const [value, setValue] = useState({
        english: '',
        transcription: '',
        russian: ''
    });
    const { loadData } = useWordsContext()

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
        setValue((word) => {
            return { ...word, [name]: value };
        });
    }
    const handleAdd = (e) => {
        e.preventDefault()
        fetch('/api/words/add', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: value.english,
                transcription: value.transcription,
                russian: value.russian,
                tags: []
            })

        })
            .then((response) => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                loadData()
            })
        setValue({ english: '', transcription: '', russian: '' });

    }
    return (
        <div className="addForm">
            <div className='addForm-inputs'>
                {(formValid.english && formErrors.english) && <div style={{ color: 'red' }}>{formErrors.english}</div>}
                <label>English </label>
                <input type="text"
                    onChange={handleChange}
                    value={value.english}
                    name="english"
                    className='input-english'>
                </input>
            </div>
            <div className='addForm-inputs'>
                {(formValid.transcription && formErrors.transcription) && <div style={{ color: 'red' }}>{formErrors.transcription}</div>}
                <label>Transcription </label>
                <input type="text"
                    onChange={handleChange}
                    value={value.transcription}
                    name="transcription"
                    className='input-transcription'>
                </input>
            </div>
            <div className='addForm-inputs'>
                {(formValid.russian && formErrors.russian) && <div style={{ color: 'red' }}>{formErrors.russian}</div>}
                <label>Translation </label>
                <input type="text"
                    onChange={handleChange}
                    value={value.russian}
                    name="russian"
                    className='input-russian'>
                </input>
            </div>
            <div>
                <TableButton
                    name={"Add"}
                    disabled={isDisabled}
                    onClick={handleAdd} />
            </div>
        </div>
    )
}


export default AddNewWord