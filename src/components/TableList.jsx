import React, { useState, useEffect } from 'react';
import './styles/tableList.scss';
import Table from './Table';
import AddNewWord from './AddNewWord';
import { useWordsContext } from './Context';
import Loader from './Loader';



function TableList() {
    const { words, isLoading, error } = useWordsContext()

    return (
        <Loader isLoading={isLoading} error={error}>
            <AddNewWord />
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
                                    word={word} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Loader>

    );
}

export default TableList;