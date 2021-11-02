import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../Card/card.scss'



function CardWrapper({ children, count, onShowPrevious, onShowNext, number, words }) {


    return (
        <div>
            {
                words?.length &&
                <>
                    <p className="learn-words">  Lerned words: {count}</p>
                    <div className="cardWrapper" >
                        <button className="leftArrow" onClick={onShowPrevious}> <FaArrowLeft /></button>
                        {children}
                        <button className="rightArrow" onClick={onShowNext}> <FaArrowRight /></button>
                    </div>
                    <p className="number_of_card">{number + 1}/{words.length}</p>
                </>
            }
        </div>
    )
}


export default CardWrapper;
