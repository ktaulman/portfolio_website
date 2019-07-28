import React from 'react';

function Link(props) {
    const {href,className,text}=props;
    return(
    <a 
        href={href}
        target={href==="#contactform"?'':"_blank"}
        className={className}
        rel="noopener noreferrer"
    >
         {text}
    </a>
    )
}

export default Link;