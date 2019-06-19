import React from 'react';
import './css/App.css';
import NavBar from "./components/NavBar"
import MainInfo from './components/MainInfo'

class App extends React.Component{
  render(){
    return(
       <div className="App">
          <NavBar />
          <MainInfo />
      </div>

    )
  }
}

export default App;
