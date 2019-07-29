import React from 'react';

const BottomBar=(props)=>{
        
        if(props.data){
            const {email,phone,address}=props.data;
            return(
                <address className='bottombar'>
                    <p className='bottombar__item'>{email}</p>
                    <p className='bottombar__item'>{phone}</p>
                    <p className='bottombar__item'>{address}</p>
            </address>
                )
            
        }
        else {
            return(
                <address className='bottombar'></address>
            )
        }
    }
export default BottomBar;