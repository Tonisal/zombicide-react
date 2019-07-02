import React, {Component} from 'react';
import PlayerList from './PlayerList.js';
import StartGameButton from './StartGameButton';


class StartGameModal extends Component {
    state = {
        playerToAdd: ''
    }

    /*Get value from search input and save them into state*/
    handleValueChange = (e) => {
        this.setState({playerToAdd: e.target.value});
    };

    /*Get value from search input which will get saved in state in the highest component*/
    addPlayer = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.playerToAdd);

    };

    removePlayer = (e) => {
        const playerToRemove = e;
        this.props.removePlayer(playerToRemove);
    };


    render() {
        return (
            <div className='o-game-config'>
                <div className="m-modal u-text-color-white">
                    <h1>Zombicide</h1>
                    <h2>Füge Spieler hinzu</h2>
                    <p className="u-text-center">Bitte füge nicht zweimal den gleichen Namen ins Spiel hinzu.</p>
                    <div className="m-modal__button-container">
                        <form onSubmit={this.addPlayer}>
                            <input className="a-input" id="addPlayerValue" type="text" onChange={this.handleValueChange}
                                   placeholder="Spielername" required/>
                            <button type="submit" className="a-btn a-btn--primary" id="addPlayer">Spieler hinzufügen
                            </button>
                        </form>
                    </div>
                    <PlayerList players={this.props.players} removePlayer={this.removePlayer}/>
                    <StartGameButton players={this.props.players}/>
                </div>
            </div>
        );
    }
};

export default StartGameModal;