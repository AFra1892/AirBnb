import React from "react"



export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src="images/katie-zaferes.png"/>
            <div className="card--stats">
                <img className="rating--star" src="images/star.png"/>
                <span>5.0</span>
                <span className="grey">(6).</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with katie</p>
            <p>From 136$ /person</p>
        </div>
    )
}