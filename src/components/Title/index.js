import React from 'react';
import './style.css';

function Title(props) {
    return <h1 className="title navbar navbar-expand-lg navbar-dark bg-primary">{props.children}</h1>
}

export default Title;