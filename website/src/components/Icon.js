import React from 'react';
import '../css/icon.css'

function Icon (props){
    return(
        <div>
            <img className="image"src={props.src} alt=""/>
             <p>{props.name}</p>
        </div>
    )


}

export default Icon; 