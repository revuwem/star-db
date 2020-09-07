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
                    <RandomPlanet />
                    <ErrorButton />
                    <PeoplePage />

                    <Row left={
                        <ItemList
                            onItemSelected={null}
                            getData={this.swapiService.getAllPlanets}>
                            {(item) => (
                                `${item.name}`
                            )}
                        </ItemList>
                    } />

                </div>
            </ErrorBoundry>
        );
    }
}