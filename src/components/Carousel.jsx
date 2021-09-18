import React, { useState } from 'react';
import CardWrapper from './CardWrapper';
import Card from './Card';
import './styles/card.css'

function Carousel({ data }) {
    const [position, setPosition] = useState(0);

    const showPreviousCard = () => {
        if (position === 0) {
            setPosition(data.length - 1)
        } else {
            setPosition(position - 1);
        }
    }

    const showNextCard = () => {
        if (position === data.length - 1) {
            setPosition(0)
        } else {
            setPosition(position + 1);
        }
    }
    return (
        <div >
            <CardWrapper
                onShowPrevious={showPreviousCard}
                onShowNext={showNextCard}
                position={position}
                data={data}
                dataLength={data.length}
                children={<Card
                    english={data[position].english}
                    translation={data[position].translation}
                    transcription={data[position].transcription} />} />
        </div>
    )
}

export default Carousel;
