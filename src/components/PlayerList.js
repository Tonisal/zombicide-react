import React, {Component} from 'react';

class PlayerList extends Component {


    deletePlayer = (e) => {
        e.preventDefault();
        const playerToRemove = e.target.getAttribute('player');
        this.props.removePlayer(playerToRemove);
    }

    render() {
        let players = this.props.players;

        if(players.length) {
            players = players.map(player =>
                <li key={player}>
                    {player}
                        <button player={player} onClick={this.deletePlayer}>Lösche User</button>
                </li>
            );
        }

        return (
            <ol>
                {players}
            </ol>
        )
    };
};

export default PlayerList;