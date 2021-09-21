import './App.css';

import React, { Component } from 'react'

class App extends Component {

  state={
    profileShow:false,
    person:{
      fullName:"oussema omrani",
      bio:[
        {id:1,skill:"HTML",progress:"80%"},
        {id:2,skill:"css",progress:"65%"},
        {id:3,skill:"JAVASCRIPT",progress:"60%"},
      ],
      imgSrc:"https://image.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg",
      profession:"web development"
      
    }
  }

  toggle = ()=> this.setState({profileShow: !this.state.profileShow})  



  
  render() {
      const person = this.state.person
    return (
      <div className="app">
        {console.log(this.state.profileShow)}
        {this.state.profileShow?
          <div className="profile">
           <div className="person-profile">
              <img src={person.imgSrc} alt={person.fullName}></img>
              <div className="profile-desc">
                <h3>{person.fullName}</h3>
                <h2>{person.profession}</h2>
              </div>
           </div>
            <ul className="skills-list">
                {person.bio.map((item)=><li key={item.id}><span style={{width:[item.progress],backgroundColor:"#006bff"}}></span>{item.skill} {item.progress}</li>)}
            </ul>
          </div>
        :null}
        <button className="toggle-btn" onClick={this.toggle}>toggle</button>
        
     </div>
    )
  }
}

export default App;
