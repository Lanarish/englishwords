import { makeAutoObservable } from 'mobx';


class WordsStore {
    words = [];
    isLoading = false;
    error = null;



    constructor() {
        makeAutoObservable(this)
    }

    loadData = () => {
        fetch('/api/words')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.words = response;
                this.isLoading = false;

            })
            .catch(error => this.error = error);
    }

    handleAdd = (value) => {

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
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.loadData()
            })

    }
    handleDelete = (id) => {
        fetch(`/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.loadData()
            })
    }

    handleSave = (value) => {
        fetch(`/api/words/${value.id}/update`, {
            method: 'POST',
            body: JSON.stringify({
                english: value.english,
                transcription: value.transcription,
                russian: value.russian,
                tags: []
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.loadData()
            })
    }
}



export default WordsStore;