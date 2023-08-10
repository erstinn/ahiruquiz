// may change name of this file
import React, {useRef} from 'react';

const QuizArea = (props) => {
    //from backend pass here the last score, then useRef for that
    const scoreRef = useRef(0); //todo put it here

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            scoreRef.current += 1;
        }
        // ... handle incorrect answers if needed
    };
    return (
        <div></div>
    );
}

export default QuizArea;