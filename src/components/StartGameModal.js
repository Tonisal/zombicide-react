import React, {Component} from 'react';


class StartGameModal extends Component {
    state = {
        playerToAdd: ''
    }

    /*Get value from search input and save them into state*/
    handleValueChange = (e) => {
        this.setState({playerToAdd: e.target.value});
        console.log(this.state);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.test(this.state.playerToAdd);

    };



    render() {
        return (
            <div className='o-game-config'>
                <div className="m-modal u-text-color-white">
                    <h1>Zombicide</h1>
                    <h2>Füge Spieler hinzu</h2>
                    <p className="u-text-center">Bitte füge nicht zweimal den gleichen Namen ins Spiel hinzu.</p>
                    <div className="m-modal__button-container">
                        <form onSubmit={this.handleFormSubmit}>
                            <input className="a-input" id="addPlayerValue" type="text" onChange={this.handleValueChange}
                                   placeholder="Spielername" required/>
                            <button type="submit" className="a-btn a-btn--primary" id="addPlayer">Spieler hinzufügen
                            </button>
                        </form>
                    </div>
                    <ol id="playersList">
                        {this.props.players}
                    </ol>
                    <p className="u-hide js-players-info">Mit <span className="js-amount-players"></span> Spieler
                        steuert
                        jeder Spieler <span className="js-amount-chars"></span> Charaktere</p>
                    <button className="a-btn a-btn--primary a-btn--centered js-toggleButton js-start-Game u-hide">Spiel
                        starten
                    </button>
                </div>
            </div>
        );
    }
};

export default StartGameModal;