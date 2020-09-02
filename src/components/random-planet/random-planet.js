import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/6.jpg`} />
            <div>
                <h4>Earth</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>1500390</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>1500</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>5680040</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RandomPlanet;