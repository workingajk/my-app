import React from "react";

export default function Button(props) {
    return (
        <div>
            <button>{props.value} {props.number}</button>
        </div>
    );
}
