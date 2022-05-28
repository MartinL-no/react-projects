import React from "react"
import data from "./json/data"
import Header from "./components/Header"
import Card from "./components/Card"

console.log(data)

function App() {
    let countries = data.map(country => {
        return <Card 
            key={country.location}
            {...country} 
        />
    })
    return (
        <div className="container">
            <Header />
            {countries}
        </div>
    )
}

export default App