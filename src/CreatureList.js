import React, { Component } from 'react';
import creatureArray from './5e-SRD-Monsters'

class CreatureList extends Component {
    renderCreatures = () => {
        return creatureArray.map(
            (e, i) => {
                return (
                    <div key={i}>
                        <div>
                            <div>
                                <h2>{e.name}</h2>
                                <span>{e.size}</span><span>{e.alignment}</span>
                            </div>
                            <div>
                                <div>{e.armor_class}</div>
                                <div>{e.hit_points}</div>
                                <div>{e.speed}</div>
                            </div>
                            <div>
                                <div>{e.strength}</div><div>{e.dexterity}</div><div>{e.constitution}</div><div>{e.intelligence}</div><div>{e.wisdom}</div><div>{e.charisma}</div>
                            </div>
                            <div>
                                <div>{e.skills}</div>
                                <div>{e.senses}</div>
                                <div>{e.languages}</div>
                                <div>{e.challenge_rating}</div>
                            </div>
                            <div>{e.special_abilities}</div>
                            <div>
                                <h3>Actions</h3>
                                <div>
                                    {e.actions}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        )
    }
    render() {
        return (
            <div>
                <header>

                </header>
                <div>
                    


                </div>
            </div>




        )
    }
}

export default CreatureList