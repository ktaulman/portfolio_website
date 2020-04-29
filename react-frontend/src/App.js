import React from 'react';
import logo from './components/logo.svg';
import InfoCard from './components/InfoCard';
import Menu from './components/Menu';
import BottomBar from './components/BottomBar';
import Logo from './components/Logo';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{},
      route:'home'
         }
  };

 openTab=(url,name)=>{
   window.open(url,'_blank','',true).location.pathName='/app'
 };
 
  componentDidMount(){
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
        
            {/* <Route
              name="Home"
              className="navbar__link"
              onClick={()=>this.onRouteChange("home")}
            /> */}
           
            <a
              className="navbar__link"
             href='./resume.pdf'
             alt='resume_download'
            >Resume</a>
          </nav>
         
              <main className="animated fadeIn mainBody">
              <InfoCard 
                data={infocardkevin}
                className=""
              />
              <Menu 
                data={menu}
                onClick={this.openTab}
                iconClassName="--hover"
                containerClassName="menu__main "
                imageClassName=''
              />
              <Menu
                data={workmenu}
                title="Projects"
                iconClassName='--hover' 
                onClick={(x)=>this.openTab(x)}
                containerClassName="menu__projects "
                imageClassName="--imgSize-medium"
              />
              <Menu
                data={skillsmenu}
                title="Skills"
                iconClassName='--no-underline --hover" '
                containerClassName="menu__skills" 
              />
              
              </main>

          <BottomBar 
            data={bottombar}
          />
      </div>

    )
   }
  
  return(
    <div>Loading</div>
  )
    
  }
}

export default App;