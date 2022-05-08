import React from "react"
import Places from "./Card"
import data from "../data"

export default function Main(props) {
    const places = data.map(item => {
        return (
            <Places
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="main">
            {places}
        </div>
    )
}