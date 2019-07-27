import React from 'react';


function WorkIcon (props){
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
             <h3 className="codinginfo-work-h3">{props.name}</h3>
             <p className="codinginfo-work-p-desc">{props.description}</p>
        </div>
    )


}

export default WorkIcon; 