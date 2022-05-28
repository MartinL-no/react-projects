import React from "react"

function Card(props) {
    return(
        <div className="card">
            <img className="card--image" src={props.imageUrl} alt={props.title}/>
            <div className="card--data">
                <span className="card--location">{props.location}</span>
                <a className="card--googleMapsUrl" href={props.googleMapsUrl}>View on Google Maps</a>

                <a className="card--title" href="#">{props.title}</a>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card