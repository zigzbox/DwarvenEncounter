import React, { Component } from 'react';
import creatureArray from './5e-SRD-Monsters'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreatureList extends Component {
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
   


//  renderCreatureListGen = () => {
//      let creatureName = creatureArray
//  }

renderCreatureName = () => {
    // const creatureNamelist = creatureArray.filter(name)
    
   return creatureArray.map(e=>{
       return (
           <div>
            <Button color="danger" onClick={()=>{
                this.toggle(e)}}>{e.name}</Button>
           </div>
       ) 
       
    })

}

renderModel = () =>{
    if (this.state.dataObject)
return(
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>{this.state.dataObject.name}</ModalHeader>
    <ModalBody>
    <div>
                   <div>
                       <div>
                           <h2>{this.state.dataObject.name}</h2>
                           <span><b>Size:</b>{this.state.dataObject.size}</span><span><b>Alignment:</b>{this.state.dataObject.alignment}</span>
                       </div>
                       <div>
                           <div>Armor Class:{this.state.dataObject.armor_class}</div>
                           <div>Hit Points:{this.state.dataObject.hit_points}</div>
                           <div>Speed:{this.state.dataObject.speed}</div>
                       </div>
                       <div>
                           <div>STR:{this.state.dataObject.strength}</div><div>DEX:{this.state.dataObject.dexterity}</div><div>CON:{this.state.dataObject.constitution}</div><div>INT:{this.state.dataObject.intelligence}</div><div>WIS:{this.state.dataObject.wisdom}</div><div>CHA:{this.state.dataObject.charisma}</div>
                       </div>
                       <div>
                           <div>{this.state.dataObject.name}</div>
                           <div>{this.state.dataObject.name}</div>
                           <div>{this.state.dataObject.name}</div>
                           <div>{this.state.dataObject.name}</div>
                       </div>
                       <div>{this.state.dataObject.name}</div>
                       <div>
                           <h3>Actions</h3>
                           <div>
                               {this.state.dataObject.name}
                           </div>
                       </div>
                   </div>
               </div>         </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
)
}

render() {
    console.log(this.state)
    return (
        <div>
            <header>
{this.renderCreatureName()}
{this.renderModel()}
            </header>
            <div>


     
            </div>
        </div>




    )
}
}

export default CreatureList