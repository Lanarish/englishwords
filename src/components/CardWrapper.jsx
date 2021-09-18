import React from 'react'
import Card from './Card';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './styles/card.css'



function CardWrapper({ onShowPrevious, onShowNext, position, children, dataLength }) {
    return (
        <div >
            <div className="cardWrapper">
                <button className="leftArrow" onClick={onShowPrevious}><FaArrowLeft /></button>
                {children}
                <button className="leftArrow" onClick={onShowNext}> <FaArrowRight /></button>
            </div>
            <p className="number_of_card">{position + 1}/{dataLength}</p>
        </div>
    )
}

export default CardWrapper;
