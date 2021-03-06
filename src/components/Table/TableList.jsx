import React, { useEffect } from 'react';
import '../Table/tableList.scss';
import Table from '../Table/Table';
import AddNewWord from '../Main/AddNewWord';
import Loader from '../Main/Loader';
import { inject, observer } from 'mobx-react';





function TableList({ words, isLoading, error, handleDelete, handleSave, handleAdd }) {

    return (
        <Loader isLoading={isLoading} error={error}>
            <AddNewWord
                handleAdd={handleAdd} />
            <div className="tableList">
                <table className="table">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Word</th>
                            <th>Transcription</th>
                            <th>Translation</th>
                            <th>Delete/Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words?.length &&
                            words.map(word => (
                                <Table
                                    key={word.id}
                                    word={word}
                                    handleDelete={handleDelete}
                                    handleSave={handleSave} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Loader>

    );
}

export default inject(({ wordsStore }) => {
    const { words, isLoading, error, handleDelete, handleSave, loadData, handleAdd } = wordsStore;

    useEffect(() => {
        loadData()
    }, [])
    return {
        words,
        isLoading,
        error,
        handleDelete,
        handleSave,
        handleAdd,
        loadData
    }

})(observer(TableList));