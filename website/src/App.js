import React from 'react';
import NavBar from "./components/NavBar";
import MainInfo from './components/MainInfo'
import CodingInfo from './components/CodingInfo'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  };
  render(){
    return(
       <div className="App">
          <NavBar />
          <MainInfo />
          <CodingInfo />
      </div>

    )
  }
}

export default App;
