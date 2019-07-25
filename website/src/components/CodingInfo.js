import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import jeopardy from '../images/jeopardy.png';
import Icon from './Icon'


function CodingInfo(){
  return(
    <div className="codinginfo-wrapper">
       <div className="codinginfo-div">
        <h3 className="codinginfo-h3">
            Skills
        </h3>
        <div className="codinginfo-icons-wrapper">
            <Icon 
                src={javascript} 
                divClass="codinginfo-icons-div"
                class='codinginfo-icon-image'
                name="Javascript"
            />

            <Icon 
                src={css}
                divClass="codinginfo-icons-div"
                class='codinginfo-icon-image'
                name="CSS"
            />

            <Icon 
                src={html}
                divClass="codinginfo-icons-div"
                class='codinginfo-icon-image'
                name="HTML"
            />

            <Icon 
                src={node}
                divClass="codinginfo-icons-div"
                class='codinginfo-icon-image-node'
                name="Node.js"
            />
        </div>
       </div>

       <div className="codinginfo-div">
            <h3 className="codinginfo-h3">
                Focus
            </h3>
            <p className="codinginfo-focus-p"> 
                Mobile-First
            </p>
            <p className="codinginfo-focus-p"> 
                Accessibility
            </p>
            <p className="codinginfo-focus-p">
                Object-Oriented
            </p>
            <p className="codinginfo-focus-p"> 
                Always Learning
            </p>
       </div>
       <div className="codinginfo-div">
            <h3 className="codinginfo-h3">
                Work
            </h3>
            <p className="codinginfo-work-p">
                8-Bit Jeopardy
            </p>
            <img 
                className="codinginfo-work-image"
                src={jeopardy} 
                alt='logo for jeopardy game'    
            />

       </div>
    </div>
)
}



export default CodingInfo;
