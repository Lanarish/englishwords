import React, { useState } from 'react';
import CardWrapper from './CardWrapper';
import './styles/card.css'

function Carousel({ data }) {
    const [position, setPosition] = useState(0);

    const showPreviousCard = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }

    const showNextCard = () => {
        if (position >= data.length) {
            console.log("end card");
        }
        setPosition(position + 1);
    }
    return (
        <div >
            <CardWrapper
                onShowPrevious={showPreviousCard}
                onShowNext={showNextCard}
                number={position + 1}
                data={data}
                dataLength={data.length} />
        </div>
    )
}

export default Carousel;
