import React from 'react'
import Punchline from './Punchline'


export default function JokeCard(props) {

    // const handleClick = () => {
    //    return <p>props.joke.punchline</p>
    // 

    return(
        <li className = "joke-item" >
            <h2>{props.joke.category}</h2>
            <p>{props.joke.setup}</p>
            <button onClick = {props.handleClick}>Show Punchline</button>
            {props.punchline ? <p>{props.joke.punchline}</p> : null}
            
        </li>
    )
}