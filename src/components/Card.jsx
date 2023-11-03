import {useState} from 'react';

const Card = ( {name, speed, color}) => {
    return (
        <div>
            <p>Name of Crewmate: {name}</p>
            <p>Speed of Crewmate: {speed} mph</p>
            <p>Color of Crewmate: {color}</p>
            <button>Edit Crewmate</button>
        </div>
    )
}

export default Card;