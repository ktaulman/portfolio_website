import React from 'react';
import Link from './Link';
import logo from '../images/logo.png';
import Icon from './Icon';
import '../css/navbar.css';

class NavBar extends React.Component{
        
    render(){
        return(
            <nav>
                <img className="logo" src={logo} alt=""/>
                <Link linkName="Work"/>
                <Link linkName="Resume"/>
                <Link linkName="About Me"/>
                <Link linkName="Contact" />
            </nav>
        )
    }

}



export default NavBar; 