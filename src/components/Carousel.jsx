import React, { useState, useEffect, useRef } from 'react';
import CardWrapper from './CardWrapper';
import Card from './Card';
import Loader from './Loader';
import './styles/card.scss';
import { inject, observer } from 'mobx-react';

function Carousel({ words, isLoading, error }) {
    const [position, setPosition] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [count, setCount] = useState(0);

    const ref = useRef(null);



    useEffect(() => ref.current && ref.current.focus());

    const handleClick = () => {
        setPressed(!pressed);
        setCount(count + 1);
    }

    const showPreviousCard = () => {
        if (position === 0) {
            setPosition(words.length - 1);
            setPressed(false)
        } else {
            setPosition(position - 1);
            setPressed(false);
        }
    }

    const showNextCard = () => {
        if (position === words.length - 1) {
            setPosition(0);
            setPressed(false);
        } else {
            setPosition(position + 1);
            setPressed(false);
        }


    }
    return (
        <Loader isLoading={isLoading} error={error}>
            <div >
                {words?.length > 0 &&
                    <CardWrapper
                        onShowPrevious={showPreviousCard}
                        onShowNext={showNextCard}
                        number={position}
                        words={words}
                        count={count}
                    >
                        <Card
                            english={words[position].english}
                            russian={words[position].russian}
                            transcription={words[position].transcription}
                            pressed={pressed}
                            handleClick={handleClick}
                            cardref={ref} />
                    </CardWrapper>}
            </div>
        </Loader>
    )
}

export default inject(({ wordsStore }) => {
    const { words, isLoading, error, loadData } = wordsStore;

    useEffect(() => {
        loadData()
    }, [])
    return {
        words,
        isLoading,
        error
    }

})(observer(Carousel));
