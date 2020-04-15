import React from 'react';



const InfoCard=(props)=>{
    if(props.data){
        let renderCard=props.data.map((el,i)=>{
            return(
                <div key={el.name +i}className={`infocard ${props.className}`}onClick={(el.href)?()=>props.onClick(el.href):undefined}>
                <img
                    className="infocard__photo"
                    src={el.src}
                    alt="kevin aka me:)"
                    />

                    <p className= "infocard__title">
                        {el.title}
                    </p>
                    <p className= "infocard__tagline">
                         {el.tagline}
                    </p>
                    <p className= "infocard__text">
                        {el.text}
                    </p>
                    </div>
            )
        })
        return(
            <>
                {renderCard}
            </>
        )}
        else{
            return(
            <div className= "infocard">
             
             </div>
            )
        }
    }

    export default InfoCard;
