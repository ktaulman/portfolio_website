import React from 'react';

function Column(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.src}alt=""/>
        </div>
    )
}



export default Column;