import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './styles/card.css'



function CardWrapper({ children, count, onShowPrevious, onShowNext, number, words }) {


    return (
        <div>
            {
                words?.length &&
                <>
                    <p className="learn-words"> Слов изучено: {count}</p>
                    <div className="cardWrapper" >
                        <button className="leftArrow" onClick={onShowPrevious}> <FaArrowLeft /></button>
                        {children}
                        <button className="leftArrow" onClick={onShowNext}> <FaArrowRight /></button>
                    </div>
                    <p className="number_of_card">{number + 1}/{words.length}</p>
                </>
            }
        </div>
    )
}


export default CardWrapper;
