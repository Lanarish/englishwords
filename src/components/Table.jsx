import React, { useState } from 'react';
import './styles/tableList.css';
import TableButton from './TableButton';


function Table(props) {
    const { id, word, transcription, translation } = props;
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);

    }
    return (

        <tr>
            <td>{id}</td>
            {pressed ? <td><input type="text"></input></td> :
                <td>{word}</td>}
            {pressed ? <td><input type="text"></input></td> :
                <td>{transcription}</td>}
            {pressed ? <td><input type="text"></input></td> :
                <td>{translation}</td>}
            <td >
                {pressed ? (
                    <div>
                        <TableButton
                            name={"Save"} />
                        <TableButton
                            name={"Cancel"} />
                    </div>
                ) : (
                    <div>
                        <TableButton
                            name={"Delete"} />
                        <TableButton onClick={handleClick} name={"Edit"} />

                    </div>
                )}
            </td>
        </tr>



    );
}





export default Table;