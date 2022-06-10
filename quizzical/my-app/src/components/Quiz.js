import React from "react"
import Question from "./Question"

// dependency added to allow correct rendering of HTML encoded API data
import { decode } from "he";

function Quiz(props) {
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState()
    

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
                            isRevealed: false, // decides whether css styles showing correct/incorrect answers are shown
                            correctGuess: false, // decides whether correct answer is shown (in combination with isRevealed)
                        }
                    })
                })
            })
    }, [])
    // Reset all variables and return screen to introduction
    function resetGame() {
        setQuizData([])
        setScore("")
        props.setHasStarted(false)
    }

    // Adds currently selected answer to state
    function selectAnswer(id, answer) {
        setQuizData(prevState => prevState.map(question => {
            if (question.id === id) {
                return {...question, userAnswer: answer}
            } else {
                return question
            }
        }))
    }

    // OnClick for "Submit Answers" button - checked users selected answers against correct one saved in state
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
    // Stores array of Question components with props defined from data recieved from API
    const questionElements = quizData.map(question => {
        return (
            <Question 
                key={question.id}
                id={question.id}
                question={question.question}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                userAnswer={question.userAnswer}
                selectAnswer={selectAnswer} // function
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