import React from 'react';
import Link from './Link';
import logo from '../images/logo.svg';


class NavBar extends React.Component{
        
    render(){
        return(
            <nav className="navbar-nav">
                <div className="navbar-div">
                <img 
                    className="navbar-logo" 
                    src={logo} 
                    alt="website-logo"
                />
                <Link 
                    linkName="Work"
                    class={"navbar-a"}
                    href={"https://github.com/ktaulman"}
                />
                <Link 
                    linkName="Resume"
                    class={"navbar-a"}
                    href={"https://drive.google.com/open?id=1GggusX9tkaC0D-wuaFB29MdMBA2VaCJ6"}
                />
                <Link 
                    linkName="About Me"
                    class={"navbar-a"}
                    href={"https://www.linkedin.com/in/ktaulman/"}
                />
                {/* <Link 
                    linkName="Contact" 
                    class={"navbar-a"}
                    href={"#contactform"}
                /> */}
                </div>
            </nav>
        )
    }

}



export default NavBar; 