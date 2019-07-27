import React from 'react';
import html from '../images/html.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript-svg.svg';
import node from '../images/node.svg';
import jeopardy from '../images/jeopardy.svg';
import react from '../images/react.svg';
import brain from '../images/brain.svg';


import Icon from './Icon'
import WorkIcon from './WorkIcon';


function CodingInfo(){
    const openTab=(x)=>{
        window.open(x,'_newtab');
        console.log(x);
     }
  return(
    <div className="codinginfo-wrapper">
       <div className="codinginfo-div">
        <h3 className="codinginfo-h3">
            Skills
        </h3>
        <div className="codinginfo-skills-wrapper">
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
                divClass="codinginfo-icons-div-node"
                class='codinginfo-icon-image-node'
                name="Node.js"
            />
            <Icon 
                src={react}
                divClass="codinginfo-icons-div"
                class='codinginfo-icon-image'
                name="React.js"
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
           <div className="codinginfo-work-wrapper">
                
                <WorkIcon
                    name="16-Bit Jeopardy"
                    description="Powered by React"
                    className="codinginfo-work-icon"
                    divClass='codinginfo-work-div'
                    class='codinginfo-work-image'
                    src={jeopardy}
                    alt="push to open Jeopardy game"
                    onClick={()=>openTab('https://ktaulman.github.io/JEOPARDY_GAME/')} 
                />
                 <WorkIcon
                    name="Facial Recognition App"
                    description="Powered by Clarifai API and React"
                    className="codinginfo-work-icon"
                    divClass='codinginfo-work-div'
                    class='codinginfo-work-image'
                    src={brain}
                    alt="push to open Brain App game"
                    onClick={()=>openTab('https://ktaulman.github.io/brainapp/')} 
                />
            </div>
       </div>
    </div>
)
}



export default CodingInfo;
