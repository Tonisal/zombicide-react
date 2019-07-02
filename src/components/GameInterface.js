import React, {Component} from 'react';

import PlayerStats from './PlayerStats';
import Config from '../config';

class GameInterface extends Component {
    /* Save all Game-Data here*/
    state = {
        player: {}


    };

    componentDidUpdate = () => {
        const dataToLocalStorage = JSON.stringify(this.state.player);
        localStorage.setItem('zombicide', dataToLocalStorage);
    };

    componentDidMount = () => {
        console.log('hi');
        if (localStorage.zombicide) {
            const dataFromLocalStorage = JSON.parse(localStorage.zombicide);

            this.setState({
                player: dataFromLocalStorage,
            });
        }

        this.initializeGame();
    };

    initializeGame = () => {
        const players = this.props.players;
        const charactersPerPlayer = Config.amountCharactersPerGame / players.length;
        const listOfCharacters = Object.keys(Config.characters); // Get Character Names from Config
        let playersToSave = {};

        for (let i = 0; i < players.length; i++) {
            const playerName = players[i];


            let charactersToAssign = []; // Alle Charaktere die wir dem Spieler zuweisen wollen

            for (let i = 0; i < charactersPerPlayer; i++) {
                let characterToAssign = listOfCharacters[Math.floor(Math.random() * Math.floor(listOfCharacters.length))];
                characterToAssign = {
                    [characterToAssign]: {
                        experience: 0,
                        leftHand: '',
                        rightHand: '',
                        inventoy1: '',
                        inventoy2: '',
                        inventoy3: '',
                    }
                };
                charactersToAssign.push(characterToAssign);

                {/*delete assigned character from Array so it is not possible to assign him again*/
                }
                let characterToDelete = Object.keys(characterToAssign).toString();
                let index = listOfCharacters.indexOf(characterToDelete);
                listOfCharacters.splice(index, 1);
            }

            playersToSave[playerName] = charactersToAssign;

            {/*Save assigned characters in state*/
            }
            this.setState({
                player: playersToSave,
            });
        }
    };


    render() {
        return (
            <div>
                <PlayerStats playerInformation={this.state.player}/>
            </div>
        )
    };
};

export default GameInterface;

