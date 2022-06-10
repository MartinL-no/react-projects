import React from "react"

function Splash(props) {
    return (
        <div className="splash-container">
            <h1>Quizzical</h1>
            <h3>An React API based Quiz Program</h3>
            <button  className="splash-btn" onClick={() => props.setHasStarted(true)}>Start Quiz</button>
        </div>
    )
}

export default Splash