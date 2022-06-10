import React from "react"
// import {nanoid} from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function Question(props) {
    const answerElements = props.answers.map(answer => {
        const selected = answer === props.userAnswer && "selected"
        const correct =
            answer === props.correctAnswer && 
            props.isRevealed && 
            "correct";
        const incorrect =
            answer !== props.correctAnswer &&
            answer === props.userAnswer &&
            props.isRevealed &&
            "incorrect";
        const revealed =
            props.isRevealed &&
            answer !== props.correctAnswer &&
            answer !== props.userAnswer &&
            "revealed"
        return(
            <button
                key={answer}
                className={`answer ${selected} ${correct} ${incorrect} ${revealed}`}
                onClick={() => props.selectAnswer(props.id, answer)}
            >
                {answer}
            </button>
        )
    })
    return (
        <section className="question-container">
            <h2 className="question-text">{props.question}</h2>
            <div className="answers-containers">
                {answerElements}
            </div>
            <hr></hr>
        </section>
    )
}

export default Question
