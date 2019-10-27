import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className='card' onClick={() => props.clickCard(props.id)} id={props.id} alt={props.name} src={props.image} >
            <img className='image' src={props.image} alt={props.name} />
        </div>
        
    )
}

export default Card;