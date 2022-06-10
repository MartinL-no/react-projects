import React from "react"
import SplashScreen from "./components/SplashScreen"
import Quiz from "./components/Quiz"

function App()  {
    // State that controls which component is shown
    const [hasStarted, setHasStarted] = React.useState(false)

    return (
        <main>
            {!hasStarted && <SplashScreen setHasStarted={setHasStarted}/>}
            {hasStarted && <Quiz setHasStarted={setHasStarted}/>}
        </main>
    )
}

export default App