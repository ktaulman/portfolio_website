import React from 'react';

function Route(props) {
    const {className,name,onClick}=props;
    return(
    <button
        className={className}
        rel="noopener noreferrer"
        onClick={onClick}
    >
         {name}
    </button>
    )
}

export default Route;