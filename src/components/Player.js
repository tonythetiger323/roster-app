import React from "react";

export default function Player(props){
    console.log("props", props);
    const hobbies = props.hobbies.length ? props.hobbies.map((hobby, index) => {
       return <li key={index}>{hobby}</li>
    }) : <p>Not Listed</p>;

    return(
        <div className="player">
        <p>{props.name} wears jersey number {props.jersey}</p>
        <ul>
            {hobbies}
        </ul>
        </div>
    );
};