import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';

import SwapiService from '../../services/swapi-service';
import DummmySwapiService from '../../services/dummy-swapi-service';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            swapiService: new SwapiService()
        }
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummmySwapiService : SwapiService;

            console.log('Switched to', Service.name);
            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div>
                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}