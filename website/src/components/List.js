import React from 'react';


const List= (props)=>{
    const {className,onClick,title,item}=props;
    return(
        <div 
            className={className}
            onClick={onClick}
            >
            <h2     className="list__title">{title}</h2>
             <p className="list__item">{item}</p>
        </div>
    )


}

export default List; 