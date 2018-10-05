import React, { Component } from 'react';

class Encounter extends Component{

  


    render(){
        return(
            <main>
                <div>
                    <form>
                    <div>
                        <label htmlFor='name'>Name of the encounter:</label>
                        <input id='encounterName' type='text' value='encounterName'/>
                    </div>
                    <div>
                        <label htmlFor='playerCount'><b>Player Count:</b></label>
                    </div>
                    <div>
                        <label htmlFor='level'>Level:</label>
                    </div>
                    
                    </form>
                </div>
                
            </main>
        )
    }
}