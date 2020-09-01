import React from 'react'

export default function JokeCard(props) {
    return(
        <li className = "joke-item">
            <h2>{props.joke.category}</h2>
            <p>{props.joke.setup}</p>
        </li>
    )
}