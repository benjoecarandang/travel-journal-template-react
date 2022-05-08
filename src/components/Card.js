import React from "react"

export default function Card(props) {
    const data = props.item;
    return (
        <div className="card">
            <div className="card--img-container">
                <img src={`../images/${data.imageUrl}`} alt="Place 1" />
            </div>
            <div className="card--details">
                <div className="card--country-and-link">
                    <img className="card--pin-icon" src="../images/pin.png" alt="Pin" />
                    <p className="card--country">{data.location}</p>
                    <a className="card--link" href={data.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <div className="card--description-container">
                    <h1 className="card--title mt-auto">{data.title}</h1>
                    <p className="card--date font-weight-bolder mt-auto">{`${data.startDate} - ${data.endDate}`}</p>
                    <p className="card--description mt-auto">{data.description}</p>
                </div>
            </div>
        </div>
    )
}