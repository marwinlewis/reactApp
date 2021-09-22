import React from "react";

function Button(props){
    return (
        <button type={props.type} class={props.class}>{props.label}</button>
    )
}

export default Button;