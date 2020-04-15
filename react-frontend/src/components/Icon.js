import React from 'react';

const Icon= (props)=>{
    const {onClick,src,name,description,className,imageClassName}=props;
    return(
        <div 
            className={`menu__icon ${className}`}
            onClick={onClick}
            >
            <img 
                className={"menu__image"+" "+imageClassName}
                src={src} 
                alt=""
            />
             <p className="menu__name">{name}</p>
             {description?
                <p className="menu__description">
                    {description}
                </p>:""
             }
        </div>
    )


}

export default Icon; 