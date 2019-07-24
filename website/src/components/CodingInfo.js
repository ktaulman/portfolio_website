import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import jeopardy from '../images/jeopardy.png';
import Icon from './Icon'


function CodingInfo(){
    const imgStyle={
        width:'75px',
        height:'75px',
        margin:'0',
        border:"black 3px dashed"
    }


    return(
    <div className="codinginfo-wrapper">
       <div>
        <h3 className="skills">Skills</h3>
        <Icon src={javascript}/>
        <Icon src={css}/>
        <Icon src={html}/>
        <Icon src={node}/>
       </div>

       <div className="focus">
        <h3 className="focus-h3">Focus</h3>
        <p className="focus-p"> Mobile-First</p>
        <p className="focus-p"> Accessibility</p>
        <p className="focus-p"> Object-Oriented</p>
        <p className="focus-p"> Always Learning</p>
       </div>
       <div className="work">
        <h3 className="work-h3">Work</h3>
            <p className="work-p">8-Bit Jeopardy</p>
            <img 
                className="work-img"
                src={jeopardy} 
                style={imgStyle} 
                alt=''    
            />

       </div>
    </div>
)
}



export default CodingInfo;
