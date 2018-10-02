import React, { Component } from 'react';

class CreatureList extends Component {
    render() {
        return (
            <div>
                <header>

                </header>
                <main>
                    <body>
                        <div>
                            <h2>Artorias, the Abysswalker</h2>
                            <ul>
                                <li>STR:18(+4) DEX:18(+4) CON:18(+4) INT:14(+2) WIS:16(+3) CHA:12(+1)</li>
                                <li><b>Saving Throws:</b>Str +10, Dex +10, Con +10</li>
                                <li><b>Damage Immunities:</b>Necrotic, Poison</li>
                                <li><b>Condition Immunities:</b> Charmed, Exhaustion, Frightened, Poisoned</li>
                                <li><b>Senses:</b>Passive perception 13</li>
                                <li><b>Languages:</b>Common, Abyssal</li>
                                <li><b>Challenge:</b>17(18000 XP)</li>
                                <li><b>Magic Resistance:</b>Artorias has advantage on saving throws against spells and other magical effects.</li>
                                <li><b>Dark Weapon:</b>When Artorias hits with his weapon, the weapon deals an extra 4d8 necrotic damage (included in the attack).</li>
                            </ul>
                            <h3>Actions</h3>
                            <ul>
                                <li><b>Multiattack:</b>Artorias makes three greatsword attacks</li>
                                <li><b>Greatsword:</b>Melee weapon attack: +10 to hit, reach 5ft, Hit: 11 (2d6+4) slashing damage. plus 18 (4d8) necrotic damage.</li>
                                <li><b>Deeper Corruption (1/day):</b>Artorias can now allow the corruption of the Abyss to seep deeper into his bones, making him stronger, faster, and tougher at the price of his sanity.
                                When Artorias's hit points drop to 70</li>
                            </ul>
                        </div>
                    </body>
                </main>
            </div>




        )
    }
}

export default CreatureList