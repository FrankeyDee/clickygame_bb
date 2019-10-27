import React from 'react';
import './style.css';

function Title(props) {
    return (
    <div>
        <h1 className="title navbar navbar-expand-lg navbar-dark bg-primary">{props.children}</h1>
            <h3 className = "scores"> Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>)
}

export default Title;