import React, { useState } from "react";

const useValidation = () => {
    const [formErrors, setFormErrors] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    const [formValid, setFormValid] = useState({
        english: false,
        transcription: false,
        russian: false
    });

    const [isDisabled, setIsDisabled] = useState(false)


    function validateField(name, value) {
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
                case "russian":
                    if (value.match(/^[а-яё -]+$/i)) {
                        setFormValid({ ...formValid, russian: false })
                        setFormErrors({ ...formErrors, russian: '' })
                    } else {
                        setFormValid({ ...formValid, russian: true })
                        setFormErrors({ ...formErrors, russian: "Just on cyrillic!" })
                    }
                    break;
            }
        }
    }
    return ({ formErrors, formValid, isDisabled, setIsDisabled, validateField })
}



export default useValidation;