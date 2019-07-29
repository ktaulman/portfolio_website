import React from 'react';

function Link(props) {
    const {href,className,name}=props;
    return(
    <a 
        href={href}
        target={"_blank"}
        className={className}
        rel="noopener noreferrer"
    >
         {name}
    </a>
    )
}

export default Link;