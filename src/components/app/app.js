import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import Row from '../row';

import SwapiService from '../../services/swapi-service';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorButton from '../error-button';
import { PlanetList, PersonList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';




export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <div>
                    <Header />

                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={5} />

                    <PersonList />
                    <PlanetList />
                    <StarshipList />

                </div>
            </ErrorBoundry>
        );
    }
}