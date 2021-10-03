import React, { useState, useEffect, useRef } from 'react';
import CardWrapper from './CardWrapper';
import './styles/card.css'

function Carousel({ data }) {
    const [position, setPosition] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => ref.current && ref.current.focus());

    const handleClick = () => {
        setPressed(!pressed);
        setCount(count + 1);
        data[position].pressed = true;
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
                pressed={data[position].pressed}
                handleClick={handleClick}
                count={count}
                wrapperref={ref} />
        </div>
    )
}

export default Carousel;
