import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import CreatureLists from './CreatureList'
import Favorite from './Favorite'
import Encounter from "./Encounter"
import NavBar from './NavBar'

class App extends Component {
addCreature = () => {
  
}


  
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path='/' component={Encounter} />
          <Route path='/CreatureList' component={CreatureLists} />
          <Route path='/Favorite' component={Favorite} />
        </Switch>
      </div>
    )
  }
}


export default App;
