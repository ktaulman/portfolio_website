import React from 'react';
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";
import InfoCard from './components/InfoCard';
import CodingInfo from './components/CodingInfo';
import Menu from './components/Menu'
import List from './components/list_data'
// import ContactForm from './components/ContactForm';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      buttonClicked:false,
    }
  };
  
  handleClick(){
    this.setState({buttonClicked:!this.state.buttonClicked})
    console.log("button clicked")
  }

  componentWillMount(){

    
  }

  render(){
    return(
       <div className="App">
          <NavBar />
          
          <main>
            <InfoCard />
            <Menu />
            <CodingInfo/>
            <List />
            {/* <BottomBar /> */}
         
          </main>
      a
      </div>

    )
  }
}

export default App;
  /* <ContactForm
              buttonClicked={this.state.buttonClicked}
              onClick={this.handleClick.bind(this)}  
            /> */