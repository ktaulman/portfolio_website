import React from 'react';

function Link(props) {
    return(
    <a 
    href="x"
    className={props.class}
    >
    {props.linkName}
    </a>
    )
}

export default Link;