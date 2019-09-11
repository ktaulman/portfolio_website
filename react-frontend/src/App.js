import React from 'react';
import logo from './components/logo.svg';
import InfoCard from './components/InfoCard';
import Menu from './components/Menu';
import BottomBar from './components/BottomBar';

import Logo from './components/Logo';
import Route from './components/Route';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{},
      route:'home'
         }
  };

 openTab=(x)=>{
    window.open(x,'_newtab');
 };
 
  componentWillMount(){
    fetch('/data.json')
      .then(response=>response.json())
      .then(data=>{
            this.setState({data:data,dataLoaded:true})
        })
  }

  onRouteChange=(route)=>{
     this.setState({route:route});

   }
 
  render(){
    if(this.state.data&&this.state.route){
      const {infocardkevin,menu,skillsmenu,workmenu,bottombar}=this.state.data;
     
  
    return(
       <div className="App ">
          <nav className="navbar">
            <Logo 
              className="navbar__logo"
              src={logo}
              alt="Portfolio Logo"
            />
        
            <Route
              name="Home"
              className="navbar__link"
              onClick={()=>this.onRouteChange("home")}
            />
           
            <Route
              name="Resume"
              className="navbar__link"
              onClick={()=>this.onRouteChange("resume")}
            />
            <Route
              name="About Me"
              className="navbar__link"
              href="#"
              onClick={()=>this.onRouteChange("aboutme")}
            />
          </nav>
          {
            this.state.route==="home"?
              <main className="animated fadeIn">
              <InfoCard 
                data={infocardkevin}
                className=""
              />
              <Menu 
                data={menu}
                onClick={(x)=>this.openTab(x)}
                className="--color-hover"
              />
              <Menu
                data={skillsmenu}
                title="Skills"
                className='--no-underline'
              />
              <Menu
                data={workmenu}
                title="Work"
                className='--wL --color-hover' 
                onClick={(x)=>this.openTab(x)}
              />
              </main>
              :
             (
               this.state.route==='resume'?
                  <Resume />
               :
               this.state.route==='aboutme'?
               <AboutMe />
             :
              <div></div>    
             )
            
          }

          <BottomBar 
            data={bottombar}
          />
      </div>

    )}
    else{
      return(
        <div>Loading</div>
      )
    }
  }
}

export default App;