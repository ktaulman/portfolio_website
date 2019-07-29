import React from 'react';

import Link from './Link';
import Logo from './Logo';

import logo from '../images/logo.svg';


const NavBar=(props)=>{
    console.log(props.data);
    if(props.data){
        const renderLinks=props.data.map((el,i)=>{
            return(
                <Link
                    key={el+i}
                    name={el.name}
                    href={el.href}
                    className={el.className}
                />
            )

        })

        return(
        <nav className="navbar">
               <Logo 
                    className="navbar__logo" 
                    src={logo} 
                    alt="portfolio logo"
                />
            {renderLinks}
        </nav>
        )

    }
    else{
        return(
            <nav className="navbar">
                </nav>
        )
        }

}



export default NavBar; 