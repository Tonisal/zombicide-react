import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import AddPlayers from './components/StartGameModal';

class App extends Component {
    state = {
        players: ''
    };

    testFunction = (test) => {
        const testarray = ['Markus', 'Toni'];
        this.setState({
            players: [
                ...this.state.players,
                test
            ]
        });
        console.log(this.state);
    };


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*Define Routes -> tag = tag for searching via the flickr api, headline -> what gets rendered as headline*/}
                    <Route exact path="/" component={() => <AddPlayers test={this.testFunction} players={this.state.players}/>}/>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
