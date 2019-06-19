import React from 'react';
//COMPONENT IMPORTS 
import Icon from './Icon';

//PHOTO IMPORTS
import kevin from '../images/kevin.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import resume from '../images/resume.png';
import calendar from '../images/calendar.png';
//CSS Import 
import '../css/MainInfo.css'

class MainInfo extends React.Component{


    render(){
        return(
            <div className="MainInfo_Wrapper">
                <img className="kevin" src={kevin} alt=""/>
                <div className="MainInfo_Text">
                    <h1>Kevin Taulman</h1>
                    <h2>Web Developer & Aspiring Autodidact</h2>
                    <p>I'm on a self-taught journey studying everyday!</p>
                </div>
                <div className="MainInfo_Icons">
                    <Icon src={linkedin} name="Career"/>
                    <Icon src={github} name="Work"/>
                    <Icon src={twitter} name="Tweets"/>
                    <Icon src={resume} name="Resume"/>
                    <Icon src={calendar} name="Progress"/>
                </div>
                <div className="MainInfo_Contact">
                    <button>Contact Me</button>
                </div>
            </div>
        )
    }


}


export default MainInfo; 