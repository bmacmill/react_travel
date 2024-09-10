import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa";

export default function TravelCard({ imageUrl, googleMapsUrl, title, startDate, endDate, description, location }) {
    return (
        <section className="TravelCard">
            <div className="TravelCard_Image">
                <img src={imageUrl} alt={`photo of ${title}`} />
            </div>

            <div className="TravelCard_Col">
                <div className="TravelCard_Info">
                    <div className="TravelCard_Location">
                        <i className="fa-solid fa-location-dot"><FaMapMarkerAlt /></i>
                        <div className="TravelCard_Location-Country">{location}</div>
                        <a href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>

                <div className="TravelCard_Title">
                    <h2>{title}</h2>
                </div>

                <div className="TravelCard_Date">
                    <h3>{startDate} - {endDate}</h3>
                </div>

                <div className="TravelCard_Description">
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}