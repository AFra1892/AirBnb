import React from "react";

export default function Joke(props){
    return(
        <div>
            <h1>setup {props.setup}</h1>
            <h1>punch {props.punchline}</h1>
        </div>
        
    )
}