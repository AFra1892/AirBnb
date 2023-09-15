import React from "react"



export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText  && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.item.coverImg}/>
            <div className="card--stats">
                <img className="rating--star" src="images/star.png"/>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}).</span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>From {props.item.price}$ /person</p>
        </div>
    )
}