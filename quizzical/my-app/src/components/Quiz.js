import React from "react"
import { decode } from "he";
import Question from "./Question"
// import {nanoid} from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function Quiz(props) {
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState("")
    

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                let index = 0
                setQuizData(() => {
                    return data.results.map(item => {
                        return {
                            id: index++,
                            question: decode(item.question),
                            answers: [...item.incorrect_answers, item.correct_answer]
                                .sort(
                                    () => Math.random() - 0.5 // shuffled answers
                                )
                                .map((answer) => decode(answer)),
                            correctAnswer: decode(item.correct_answer),
                            selectAnswer: {selectAnswer},
                            userAnswer: "",
                            isRevealed: false,
                            correctGuess: false,
                        }
                    })
                })
            })
    }, [])

    function resetGame() {
        setQuizData([])
        setScore("")
        props.setHasStarted(false)
    }
    function selectAnswer(id, answer) {
        setQuizData(prevState => prevState.map(question => {
            if (question.id === id) {
                return {...question, userAnswer: answer}
            } else {
                return question
            }
        }))
    }

    function submitAnswers() {
        setQuizData(prevState =>{
            return prevState.map(item =>{
                if (item.userAnswer === item.correctAnswer) {
                    setScore(prevState => prevState + 1)
                    return {
                        ...item,
                        isRevealed: true,
                        correctGuess: true,
                    } 
                } else {
                    return {
                        ...item,
                        isRevealed: true,
                    }
                }
                
            })
        })
    }

    const questionElements = quizData.map(question => {
        return (
            <Question 
                key={question.id}
                id={question.id}
                question={question.question}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                userAnswer={question.userAnswer}
                selectAnswer={selectAnswer}
                correctGuess={question.correctGuess}
                isRevealed={question.isRevealed}
            />
        )
    })


    return (
        <div className="quiz-container">
            <div>{questionElements}</div>
            <footer>
                {score && <p className="score">You scored {score}/{quizData.length} correct answers</p>}
                {quizData.length === 5 && !score && <button className="quiz-btn" onClick={submitAnswers}>Submit Answers</button>}
                {score && <button className="quiz-btn" onClick={resetGame}>Start New Game</button>}
            </footer>
        </div>
    )
}

export default Quiz