import React from 'react'

export default function JokeCard(props) {

    // const handleClick = () => {
    //     props.handleClick(props.joke.punchline)
    // }

    return(
        <li className = "punchline" >
            <h2>{props.joke.punchline}</h2>
            
        </li>
    )
}