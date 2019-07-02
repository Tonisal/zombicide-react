import React from 'react';
import { Link } from 'react-router-dom';

const StartGameButton = (props) => {
    if(props.players.length === 2 || props.players.length === 3 || props.players.length === 6) {

        return (
            <Link to="/game">
                <button className="a-btn a-btn--primary a-btn--centered js-toggleButton js-start-Game">Spiel
                    starten
                </button>
            </Link>
        )
    } else {
        return null;
    }
};

export default StartGameButton;