import React from 'react';
import './styles/tableList.css';
import Table from './Table';
import words from './assets/words.json'




function TableList() {

    return (
        <div className="tableList">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                        <th>Delete/Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(word => (
                        <Table
                            key={word.id}
                            word={word} />

                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableList;