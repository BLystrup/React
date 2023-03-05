import React from 'react';
import { useParams } from 'react-router-dom';

const Complex = () => {
    const {word} = useParams();
    const {text} = useParams();
    const {background} = useParams();

    return (
        <div>
            <h1 style={{color: text, backgroundColor: background}}>The word is: {word}</h1>
        </div>
    )
}

export default Complex