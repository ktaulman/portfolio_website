import React from 'react';
import NavBar from "./components/NavBar";
import MainInfo from './components/MainInfo'
import CodingInfo from './components/CodingInfo'
import ContactForm from './components/ContactForm';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      buttonClicked:false,
    }
  };
  
  handleClick(){
    this.setState({buttonClicked:!this.state.buttonClicked})
    console.log("button clicked")
  }

  render(){
    return(
       <div className="App">
          <NavBar />
  
            <MainInfo />
            <ContactForm
              buttonClicked={this.state.buttonClicked}
              onClick={this.handleClick.bind(this)}  
            />
            <CodingInfo/>
          
          
          <div className='navbar-nav-bottom'>
            <p>kevin.taulman@icloud.com</p>
            <p>408-550-5763</p>
            <p>3300 Cascade Rd SW, Atlanta, GA, 30311</p>
          </div>
      </div>

    )
  }
}

export default App;
