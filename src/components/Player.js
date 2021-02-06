import React from "react";

export default function Player(props){
    console.log("props", props);
    return(
        <p>{props.name} wears jersey number {props.jersey}</p>
    );
};