import React from 'react';
import Icon from './Icon'


const Menu=(props)=>{
    let {iconClassName,containerClassName,data,title,onClick,imageClassName}=props;
    if(data){
   
        let renderTitle=title?
            <h1 className='menu__title'>{title}</h1>:""
        
     
        let renderIcons=data.map((el,i)=>{
            return(
                <Icon 
                    key={el.name+i}
                    src={el.src}
                    name={el.name}
                    onClick={onClick?()=>onClick(el.href,el.name):undefined}
                    description={el.description}
                    className={iconClassName?iconClassName:''}
                    imageClassName={imageClassName}
                />
            )
        })
        

        return(
            <div className={`menu ${containerClassName}`}>
            {renderTitle}
            
                {renderIcons}
            
            </div>
        )
    }
    else{
        return(
            <div className= "menu">
            </div>
            )
    }
}
    export default Menu;