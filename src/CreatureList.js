import React, { Component } from 'react';
import creatureArray from './5e-SRD-Monsters'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css'


class CreatureList extends Component {





    renderSpecialAbilities = () => {
        if (this.state.dataObject.special_abilities) {
            const specialAbilities = this.state.dataObject.special_abilities.map((f, i) => {
                return (
                    <div>
                        <div><b>{f.name}</b></div>
                        <div>{f.desc}</div>
                        <div>Attack Bonus: {f.attack_bonus}</div>
                    </div>
                )

            })
            return specialAbilities
        }
    }

    renderActions = () => {
        if (this.state.dataObject.actions) {
            const actions = this.state.dataObject.actions.map((a, i) => {
                return (
                    <div>
                        <div><b>{a.name}:</b></div>
                        <div>{a.desc}:</div>
                        <div>Attack Bonus: {a.attack_bonus}</div>
                        <div>Damage Dice: {a.damage_dice}</div>
                        <div>Damage Bonus: {a.damage_bonus}</div>
                    </div>
                )
            })
            return actions
        }
    }

    renderLegendaryActions = () => {
        if (this.state.dataObject.legendary_actions) {
            const legendaryActions = this.state.dataObject.legendary_actions.map((w, i) => {
                return (
                    <div>
                        <div><b>{w.name}</b></div>
                        <div>{w.desc}</div>
                        <div>Attack Bonus: {w.attack_bonus}</div>
                        <div>Damage Dice: {w.damage_dice}</div>
                    </div>
                )
            })
            return legendaryActions
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(data) {
        this.setState({
            modal: !this.state.modal,
            dataObject: data
        });
    }

    renderCreatureName = () => {


        return creatureArray.map(e => {
            return (
                <div>
                    <Button color="danger" onClick={() => {
                        this.toggle(e)
                    }}>{e.name}</Button>
                </div>
            )

        })

    }

//    handleClick(event) {
//        this.setState(this.state =>({
//            name: this.state.dataObject.name;
//            challenge_rating: this.state.dataObject.challenge_rating

//        }))
//    }

// createEncounterList = async(encounterToSave) => {
//     const r = await fetch('url/encounterList', {
//         method:'POST',
//         body: JSON.stringify(encounterToSave)
//     })
//     const r = await r.json()
    
// }
    








  //need to figure out how to limit how many things display on the page...
renderModel = () => {
    if (this.state.dataObject) {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.state.dataObject.name}</ModalHeader>
                <ModalBody>
                    <div>
                        <div>
                            <div class='title'>
                                <h4><span><b>Size: </b>{this.state.dataObject.size}</span><span> <b>Alignment: </b>{this.state.dataObject.alignment}</span></h4>
                            </div>
                            <div>
                                <div><b>Armor Class:</b> {this.state.dataObject.armor_class}</div>
                                <div><b>Hit Points:</b> {this.state.dataObject.hit_points}(Hit dice {this.state.dataObject.hit_dice})</div>
                                <div><b>Speed:</b> {this.state.dataObject.speed}</div>
                                <div><b>Saves:</b> {this.state.dataObject.saves}</div>
                            </div>
                            <div class='formBox'>
                                <div>STR:{this.state.dataObject.strength}</div><div>DEX:{this.state.dataObject.dexterity}</div><div>CON:{this.state.dataObject.constitution}</div><div>INT:{this.state.dataObject.intelligence}</div><div>WIS:{this.state.dataObject.wisdom}</div><div>CHA:{this.state.dataObject.charisma}</div>
                            </div>
                            <div class='skillsBox'>
                                <div><b>Skills:</b> {this.state.dataObject.skills}</div>
                                <div><b>Senses:</b> {this.state.dataObject.senses}</div>
                                <div><b>Languages:</b> {this.state.dataObject.languages}</div>
                                <div><b>Challenge:</b> {this.state.dataObject.challenge_rating}</div>
                            </div>
                            <h3>Special Abilities</h3>
                            <div>{this.renderSpecialAbilities()}
                            </div>
                            <div>
                                <h3>Actions</h3>
                                <div>
                                    {this.renderActions()}
                                </div>
                            </div>
                            <div>
                                <h3>Legendary Actions</h3>
                                <div>
                                    {this.renderLegendaryActions()}
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Add to encounter</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Done</Button>
                </ModalFooter>
            </Modal>

        )
    }
    else {
        return
    }
}

render() {
    console.log(this.state)
    return (
        <div>

            {this.renderCreatureName()}
            {this.renderModel()}
            
<footer>this is where the footer is</footer>
        </div>




    )
}
}

export default CreatureList