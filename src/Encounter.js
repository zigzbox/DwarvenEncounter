import React, { Component } from 'react';
import { Table } from 'reactstrap'


class Encounter extends Component {
    state = {
        name: '',
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

        })

    }

  
    render() {
        return (
            <main>
                <div>
                    <div class='dwarven'>CREATE YOUR ENCOUNTER</div>
                    <form>
                        <div>
                            <label htmlFor='name'>Name of the encounter:</label>
                            <input id='name' type='text' value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                        <div>
                            <label htmlFor='playerCount'><b>Player Count:</b></label>
                            <select id='playerCount'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='level'>Level:</label>
                            <select id='level'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='creatureEncounterList'>Creatures for the Encounter:</label>
                            <div>
                                <Table dark>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Creature Name</th>
                                            <th>Challenge Rating</th>
                                            <th>EXP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    <button>Save Encounter</button>
                    <button>Clear Encounter</button>
                    </form>
                </div>

            </main>
        )
    }
}

export default Encounter