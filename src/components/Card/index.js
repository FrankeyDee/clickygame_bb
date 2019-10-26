import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className='card border-primary mb-3'>
                <img onClick={() => props.clickCard(props.id)} id={props.id} alt={props.name} src={props.image} />
            </div>
    )
}

export default Card;