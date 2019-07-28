import React from 'react';


const Icon= (props)=>{
    const {className,onClick,src,name}=props;
    return(
        <div 
            className={className}
            onClick={onClick}
            >
            <img 
                className="menu__image"
                src={src} 
                alt=""
            />
             <p className="menu__name">{name}</p>
        </div>
    )


}

export default Icon; 