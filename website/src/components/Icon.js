import React from 'react';


function Icon (props){
    return(
        <div 
            className={props.divClass}
            onClick={props.onClick}
            >
            <img 
                className={props.class}
                src={props.src} 
                alt=""/
            >
             <p className="maininfo-icons-p">{props.name}</p>
        </div>
    )


}

export default Icon; 