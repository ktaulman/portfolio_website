import React from 'react';
import kevin from '../images/kevin.jpg';


const InfoCard=(props)=>{
 
        return(
            <div className= "infocard">
                <img 
                    className= "infocard__photo" 
                    src={kevin} 
                    alt="kevin aka me :)"
                />
                    <p className= "infocard__title">
                    Kevin Taulman
                    </p>
                    <p className= "infocard__tagline">
                    Web Developer
                    </p>
                    <p className= "infocard__text">I'm on a self-taught journey with a focus on Front-End!
                    </p>
             </div>

        )
    }

    export default InfoCard;

/* <div className= "infocard__icons-wrapper">
                    <Icon 
                        src={linkedin} 
                        name="Career"
                        divClass= "infocard__icons-div"
                        class= "infocard__icons-image"
                        onClick={()=>openTab("https://www.linkedin.com/in/ktaulman/")}
                    />
                    <Icon 
                        src={github} 
                        name="Work"
                        divClass= "infocard__icons-div"
                        class= "infocard__icons-image"
                        onClick={()=>openTab("https://github.com/ktaulman")}
                    />
                    <Icon 
                        src={twitter} 
                        name="Tweets"
                        divClass= "infocard__icons-div"
                        class= "infocard__icons-image"
                        onClick={()=>openTab("https://twitter.com/kevintaulman?lang=en")}
                    />
                    <Icon 
                        src={resume} 
                        name="Resume"
                        divClass= "infocard__icons-div"
                        class= "infocard__icons-image" 
                        onClick={()=>openTab("https://drive.google.com/file/d/1Wwr3Ls6boLP_OGR9yVpQHA5DSRxYGGec/view?usp=sharing")}
                    />
</div> */