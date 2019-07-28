import React from 'react';
import Icon from './Icon'
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import resume from '../images/resume.svg';

const Menu=(props)=>{
    const {}=props;

    const openTab=(x)=>{
        window.open(x,'_newtab');
     };

    return(
        <div className= "menu">
                    <Icon
                        src={linkedin} 
                        name="Career"
                        className="menu__icon"
                        onClick={()=>openTab("https://www.linkedin.com/in/ktaulman/")}
                    />
                  <Icon 
                        src={github} 
                        name="Work"
                        className= "menu__icon"
                        onClick={()=>openTab("https://github.com/ktaulman")}
                    />
                    <Icon 
                        src={twitter} 
                        name="Tweets"
                        className= "menu__icon"
                        onClick={()=>openTab("https://twitter.com/kevintaulman?lang=en")}
                    />
                    <Icon 
                        src={resume} 
                        name="Resume"
                        className= "menu__icon" 
                        onClick={()=>openTab("https://drive.google.com/file/d/1Wwr3Ls6boLP_OGR9yVpQHA5DSRxYGGec/view?usp=sharing")}
                    />
        </div>
    )
}
    export default Menu;