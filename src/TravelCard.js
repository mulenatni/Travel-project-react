import React from "react";
import cardOne from "./card1.jpg"

export default function TravelCard(props){
    return (


            <div className="travel--inner">
            <img src={props.items.imageUrl} className="travelcard--image"/>
            <h7 className="travel-country">{props.items.location}</h7><a href={props.items.googleMapsUrl} target="_blank" className="travel-view">View on google map</a>
            <p className="travel-mountain">{props.items.title}</p>
            <p className="travel-date">{props.items.startDate} - {props.items.endDate}</p>
            <p className="travel-description">{props.items.description}
            </p>
            </div>
        

    )
}