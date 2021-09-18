import React, { useState } from 'react';
import CardWrapper from './CardWrapper';
import './styles/card.css'

function Carousel({ data }) {
    const [position, setPosition] = useState(0);
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);
    }
    const showPreviousCard = () => {
        if (position === 0) {
            setPosition(data.length - 1, setPressed(false))
        } else {
            setPosition(position - 1, setPressed(false));
        }
    }

    const showNextCard = () => {
        if (position === data.length - 1) {
            setPosition(0, setPressed(false));
        } else {
            setPosition(position + 1, setPressed(false));
        }


    }
    return (
        <div >
            <CardWrapper
                onShowPrevious={showPreviousCard}
                onShowNext={showNextCard}
                number={position}
                data={data}
                dataLength={data.length}
                pressed={pressed}
                handleClick={handleClick} />
        </div>
    )
}

export default Carousel;
