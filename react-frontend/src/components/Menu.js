import React from 'react';
import Icon from './Icon'


const Menu=(props)=>{
    let {className,data,title,onClick}=props;
    if(data){
   
        let renderTitle=title?
            <h1 className='menu__title'>{title}</h1>:""
        
     
        let renderIcons=data.map((el,i)=>{
            return(
                <Icon 
                    src={el.src}
                    name={el.name}
                    onClick={el.href?()=>onClick(el.href):''}
                    description={el.description}
                    className={className?className:''}
                />
            )
        })
        

        return(
            <div className ="menu">
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