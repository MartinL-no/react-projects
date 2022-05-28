import React from "react"

function Card(props) {
    return(
        <div className="card">
            <img className="card--img" src={props.imageUrl} alt={props.title}/>
            <div className="card--data">
                <span className="card--location">{props.location}</span>
                <a className="card--googleMapsUrl" href={props.googleMapsUrl}>View on Google Maps</a>

                <h2 className="card--title">{props.title}</h2>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card


// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: 