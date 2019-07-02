import React from 'react';

import Table from 'react-bootstrap/Table';

const CharacterInformation = (props) => {

    var test = props.characters;
    test.forEach(function (player) {
    });

    var test2 = test.map(player =>

        <li key={Object.keys(player)}>
            <ul className="o-player-stats__character-stats">
                <li>
                    <Table striped bordered hover>
                        <thead>
                            <th colSpan="2">{Object.keys(player)}</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Experience</td>
                            <td>{player[Object.keys(player)].experience}</td>
                        </tr>
                        <tr>
                            <td>Left Hand</td>
                            <td>{player[Object.keys(player)].rightHand}</td>
                        </tr>
                        <tr>
                            <td>Left Hand</td>
                            <td>{player[Object.keys(player)].leftHand}</td>
                        </tr>
                        <tr>
                            <td>Inventory 1</td>
                            <td>{player[Object.keys(player)].inventoy1}</td>
                        </tr>
                        <tr>
                            <td>Inventory 2</td>
                            <td>{player[Object.keys(player)].inventoy2}</td>
                        </tr>
                        <tr>
                            <td>Inventory 3</td>
                            <td>{player[Object.keys(player)].inventoy3}</td>
                        </tr>
                        </tbody>
                    </Table>
                </li>
            </ul>
        </li>
    );

    return (
        <ul className="o-player-stats__character">
            {test2}
        </ul>
    )
};

export default CharacterInformation;
