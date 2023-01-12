import React from "react"

function Splash(props) {
    return (
        <div className="splash-container">
            <h1>Quizzical</h1>
            <h3>A React API Based Quiz Program</h3>
            <button  className="splash-btn" onClick={() => props.setHasStarted(true)}>Start Quiz</button>
        </div>
    )
}

export default Splash