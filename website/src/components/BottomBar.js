import React from 'react';

const BottomBar=(props)=>{
    const {emailAddress,phone,address}= props;
        return(
            <div className='bottombar'>
                <h3 className='bottombar__item'>kevin.taulman@icloud.com</h3>
                <p className='bottombar__item'>408-550-5763</p>
                <p className='bottombar__item'>3300 Cascade Rd SW, Atlanta, GA, 30311</p>
          </div>
            )
        }

export default BottomBar;