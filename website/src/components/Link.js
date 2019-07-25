import React from 'react';

function Link(props) {
    return(
    <a 
    href={props.href}
    target="_blank"
    className={props.class}
    rel="noopener noreferrer"
    >
    {props.linkName}
    </a>
    )
}

export default Link;