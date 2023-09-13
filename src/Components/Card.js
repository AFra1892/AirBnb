import React from "react"



export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.img}/>
            <div className="card--stats">
                <img className="rating--star" src="images/star.png"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}).</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From {props.price}$ /person</p>
        </div>
    )
}