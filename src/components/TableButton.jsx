import React from 'react';
import './styles/tableList.scss';

function TableButton(props) {
    return (
        <button className="table_button" {...props}>
            {props.name}
        </button>
    )
}

export default TableButton;
