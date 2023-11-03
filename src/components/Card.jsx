import {useState} from 'react';
import {Link} from 'react-router-dom'

const Card = ( {ident, name, speed, color} ) => {
    return (
        <div>
            <p>Name of Crewmate: {name}</p>
            <p>Speed of Crewmate: {speed} mph</p>
            <p>Color of Crewmate: {color}</p>
            <Link to={`/edit/${ident}`}><button>Edit Crewmate</button></Link>
        </div>
    )
}

export default Card;