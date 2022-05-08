import React from "react"

export default function Navbar(props) {
    return (
        <div className="nav">
            <img src="../images/globe.png" alt=""></img>
            <h3 className="nav--title">{props.title}</h3>
        </div>
    )
}