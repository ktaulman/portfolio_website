import React from 'react';
import NavBar from "./components/NavBar";
import InfoCard from './components/InfoCard';
import Menu from './components/Menu';
import BottomBar from './components/BottomBar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{},
    }
  };

 openTab=(x)=>{
    window.open(x,'_newtab');
 };
  
 
  componentWillMount(){
    fetch('/data.json')
      .then(response=>response.json())
      .then(data=>{
            this.setState({data:data})
        })
    

  }
 
  render(){
    const {navbar,infocardkevin,menu,skillsmenu,workmenu,bottombar}=this.state.data;
    return(
       <div className="App">
          <NavBar
            data={navbar}
          />      
          <main>
          <InfoCard 
            data={infocardkevin}

          />
          <Menu 
            data={menu}
            onClick={(x)=>this.openTab(x)}
            className="--hover"
          />
          <Menu
            data={skillsmenu}
            title="Skills"
            className=''
          />
          <Menu
            data={workmenu}
            title="Work"
            className='--wL --border-gold --hover'
            onClick={(x)=>this.openTab(x)}
          />
      
          </main>
          <BottomBar 
            data={bottombar}
          />
      </div>

    )
  }
}

export default App;