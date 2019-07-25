import React from 'react';
//COMPONENT IMPORTS 
import Icon from './Icon';

//PHOTO IMPORTS
import kevin from '../images/kevin.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import resume from '../images/resume.png';
//import calendar from '../images/calendar.png';
//CSS Import 


const MainInfo=(props)=>{
    const openTab=(x)=>{
       window.open(x,'_newtab');
       console.log(x);
    };
        return(
            <div className="maininfo-wrapper">
                <img 
                className="maininfo-picture" 
                src={kevin} 
                alt="kevin aka me :)"

                />

                <div className="maininfo-info">
                    <h1 className="maininfo-info-h1">
                    Kevin Taulman
                    </h1>
                    <h2 className="maininfo-info-h2">
                    Web Developer & Aspiring Autodidact
                    </h2>
                    <p className="maininfo-info-p">I'm on a self-taught journey studying everyday!
                    </p>
                </div>

                <div className="maininfo-icons-container">
                    <Icon 
                        src={linkedin} 
                        name="Career"
                        divClass="maininfo-icons-div"
                        class="maininfo-icons-image"
                        onClick={()=>openTab("https://www.linkedin.com/in/ktaulman/")}
                    />
                    <Icon 
                        src={github} 
                        name="Work"
                        divClass="maininfo-icons-div"
                        class="maininfo-icons-image"
                        onClick={()=>openTab("https://github.com/ktaulman")}
                    />
                    <Icon 
                        src={twitter} 
                        name="Tweets"
                        divClass="maininfo-icons-div"
                        class="maininfo-icons-image"
                        onClick={()=>openTab("https://twitter.com/kevintaulman?lang=en")}
                    />
                    <Icon 
                        src={resume} 
                        name="Resume"
                        divClass="maininfo-icons-div"
                        class="maininfo-icons-image" 
                        onClick={()=>openTab("https://drive.google.com/open?id=1GggusX9tkaC0D-wuaFB29MdMBA2VaCJ6")}
                    />
                    {/* <Icon 
                        src={calendar} 
                        name="Algorithm Practice"
                        divClass="maininfo-icons-div"
                        class="maininfo-icons-image"
                      
                    /> */}
                </div>

              
            </div>
        )
    }

    export default MainInfo;
