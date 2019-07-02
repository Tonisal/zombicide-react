import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import StartGameModal from './components/StartGameModal';
import GameInterface from './components/GameInterface';

class App extends Component {
    state = {
        players: '',
    };

    addPlayer = (playerToAdd) => {
        this.setState({
            players: [
                ...this.state.players,
                playerToAdd
            ]
        });
    };

    removePlayer = (playerToRemove) => {
        let players = this.state.players;
        const index = players.indexOf(playerToRemove);
        players.splice(index, 1);

        this.setState({
            players: players

        });
    };


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <StartGameModal addPlayer={this.addPlayer} removePlayer={this.removePlayer} players={this.state.players}/>}/>
                    <Route exact path="/game" component={() => <GameInterface players={this.state.players}/>}/>


                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
