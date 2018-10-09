import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class NavBar extends Component {
    render(){
        return(
            <nav>
                <Link to='/Favorite'>Fovorite Enounters</Link>
                <Link to='/'>Build a encounter</Link>
                <Link to='/CreatureList'>Creature List</Link>
            </nav>
        )
    }
}

export default NavBar