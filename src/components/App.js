import React from 'react';
import {Link} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }

   
  render(){
    return(
      <div className="jumbotron">
        <h1>this is redux</h1>
        <h4 style={{color:'#777'}}>before you meet shop page,you should log in first</h4>
        <Link to="/shop" style={{fontSize:'20px',textDecoration:'none',color:'blue'}}>click here,turn to shop page</Link>
      </div>
    )
  }
}




export default App
