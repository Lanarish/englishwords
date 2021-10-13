import { createContext, useContext, useState, useEffect } from "react";


// для контекста нужен provider  и consumer 
const Context = createContext();

// Компоненты, принимающие состояние, называются Consumer (получатель)
export const useWordsContext = () => {
    return (
        useContext(Context)
    )
}
//Компонент, который хранит общее состояние называется Provider (донор). 
export const ProviderContext = ({ children }) => {

    const [words, setWords] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() => {
        setIsLoading(true);
        loadData();
        // fetch('/api/words')
        //     .then((response) => {
        //         if (response.ok) { //Проверяем что код ответа 200
        //             return response.json();
        //         } else {
        //             throw new Error('Something went wrong ...');
        //         }
        //     })
        //     .then((response) => {
        //         setWords(response)
        //         setIsLoading(false);
        //     })
        //     .catch(error => setError(error));
    }, [])

    const loadData = () => {
        fetch('/api/words')
            .then((response) => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                setWords(response)
                setIsLoading(false);
            })
            .catch(error => setError(error));
    }

    return (
        <Context.Provider value={{ words, setWords, isLoading, error, loadData }}>{children}</Context.Provider>
    )
}

