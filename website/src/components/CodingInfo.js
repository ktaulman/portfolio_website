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
       
        <div className="menu --vertical">
            <h3 className="menu__title">
                Skills
            </h3>
            <Icon 
                src={javascript} 
                className="menu__icon"
                name="Javascript"
            />

            <Icon 
                src={css}
                className="menu__icon"
                name="CSS"
            />

            <Icon 
                src={html}
                className="menu__icon"
                name="HTML"
            />

            <Icon 
                src={node}
                className="menu__icon"
                name="Node.js"
            />
            <Icon 
                src={react}
                className="menu__icon"
                name="React.js"
            />
        </div>
  )}    
//        

//        <div className="codinginfo-work-wrapper">
//             <h3 className="menu__icon">
//                 Work
//             </h3>
//            <div className="codinginfo-work-div">
                
//                 <WorkIcon
//                     name="16-Bit Jeopardy"
//                     description="Powered by React"
//                     className="codinginfo-work-icon"
//                     className='codinginfo-work-div'
//                     class='codinginfo-work-image'
//                     src={jeopardy}
//                     alt="push to open Jeopardy game"
//                     onClick={()=>openTab('https://ktaulman.github.io/JEOPARDY_GAME/')} 
//                 />
//                  <WorkIcon
//                     name="Facial Recognition App"
//                     description="Powered by Clarifai API and React"
//                     className="codinginfo-work-icon"
//                     className='codinginfo-work-div'
//                     class='codinginfo-work-image'
//                     src={brain}
//                     alt="push to open Brain App game"
//                     onClick={()=>openTab('https://ktaulman.github.io/brainapp/')} 
//                 />
//             </div>
//        </div>
//     </div>
// )
// }



export default CodingInfo;
