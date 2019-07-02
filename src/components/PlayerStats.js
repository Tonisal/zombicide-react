import React from 'react';
import CharacterInformation from './CharacterInformation.js';


const PlayerStats = (props) => {
    let players = (Object.keys(props.playerInformation));
    let PlayerStatsMarkup;

    PlayerStatsMarkup = players.map(player =>
        <li className="o-player-stats__user" key={player}>
            {player}
            <CharacterInformation characters={props.playerInformation[player]} />
        </li>
    );


    return (
        <ul className="o-player-stats">
            {PlayerStatsMarkup}

        </ul>
    )
};

export default PlayerStats;