import React from 'react';
import Link from './Link';
import logo from '../images/logo.svg';
import '../css/navbar.css';

class NavBar extends React.Component{
        
    render(){
        return(
            <nav className="navbar-nav">
                <img 
                    className="navbar-logo" 
                    src={logo} 
                    alt="website-logo"
                />
                <Link 
                    linkName="Work"
                    class={"navbar-a"}
                />
                <Link 
                    linkName="Resume"
                    class={"navbar-a"}
                />
                <Link 
                    linkName="About Me"
                    class={"navbar-a"}
                />
                <Link 
                    linkName="Contact" 
                    class={"navbar-a"}
                />
            </nav>
        )
    }

}



export default NavBar; 