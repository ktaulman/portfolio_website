import React from 'react';

const BottomBar=(props)=>{
        
        if(props.data){
            const {email,phone,address}=props.data;
            return(
                <div className='bottombar'>
                    
                    <p className='bottombar__item'>{email}</p>
                    <p className='bottombar__item'>{phone}</p>
                    <p className='bottombar__item'>{address}</p>
            </div>
                )
            
        }
        else {
            return(
                <div className='bottombar'></div>
            )
        }
    }
export default BottomBar;