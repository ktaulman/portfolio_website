import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar"
import MainInfo from './components/MainInfo'
import CodingInfo from './components/CodingInfo'

class App extends React.Component{
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
