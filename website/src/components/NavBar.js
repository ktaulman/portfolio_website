import React from 'react';
import Link from './Link';
import Logo from './Logo'
import logo from '../images/logo.svg';


class NavBar extends React.Component{
        
    render(){
        return(
            <nav className="navbar">
                <Logo 
                    className="navbar__logo" 
                    src={logo} 
                    alt="portfolio logo"
                />
                <Link 
                    text="Work"
                    className={"navbar__link"}
                    href={"https://github.com/ktaulman"}
                />
                <Link 
                    text="Resume"
                    className={"navbar__link"}
                    href={"https://drive.google.com/open?id=1GggusX9tkaC0D-wuaFB29MdMBA2VaCJ6"}
                />
                <Link 
                    text="About Me"
                    className={"navbar__link"}
                    href={"https://www.linkedin.com/in/ktaulman/"}
                />
                <Link 
                    text="Contact" 
                    className={"navbar__link"}
                    href={"#contactform"}
                />
            </nav>
        )
    }

}



export default NavBar; 