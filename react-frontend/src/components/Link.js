import React from 'react';

function Link(props) {
    const {href,className,name,onClick}=props;
    return(
    <a 
        href={href}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
        onClick={onClick}
    >
         {name}
    </a>
    )
}

export default Link;