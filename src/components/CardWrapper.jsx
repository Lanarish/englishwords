import React from 'react'
import Card from './Card';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './styles/card.css'



function CardWrapper({ onShowPrevious, onShowNext, number, data, dataLength, pressed, handleClick, count, wrapperref }) {
    return (
        <div >
            <p className="learn-words"> Слов изучено: {count}</p>
            <div className="cardWrapper" >
                <button className="leftArrow" onClick={onShowPrevious}> <FaArrowLeft /></button>
                <Card
                    english={data[number].english}
                    translation={data[number].translation}
                    transcription={data[number].transcription}
                    pressed={pressed}
                    handleClick={handleClick}
                    cardref={wrapperref}

                />
                <button className="leftArrow" onClick={onShowNext}> <FaArrowRight /></button>
            </div>
            <p className="number_of_card">{number + 1}/{dataLength}</p>
        </div>
    )
}

export default CardWrapper;
