import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import jeopardy from '../images/jeopardy.png'
import "../css/CodingInfo.css"
import Icon from './Icon'


function CodingInfo(){
    const imgStyle={
        width:'75px',
        height:'75px',
        margin:'0'
    }


    return(
    <div className="Coding_Info_Wrapper">
       <div>
        <h3>Skills</h3>
        <Icon src={javascript}/>
        <Icon src={css}/>
        <Icon src={html}/>
        <Icon src={node}/>
       </div>
       <div>
        <h3>Focus</h3>
        <p>Mobile-First</p>
        <p>Accessibility</p>
        <p>Object-Oriented</p>
        <p>Always Learning</p>
       </div>
       <div>
        <h3>Work</h3>
            <p>8-Bit Jeopardy</p>
            <img src={jeopardy} style={imgStyle} alt=''/>

       </div>
    </div>
)
}



export default CodingInfo;
