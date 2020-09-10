import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import Row from '../row';

import SwapiService from '../../services/swapi-service';
import DummmySwapiService from '../../services/dummy-swapi-service';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorButton from '../error-button';
import { PlanetList, PersonList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-context';



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            swapiService: new SwapiService()
        }
    }   

    onServiceChange = () => {
        this.setState(({swapiService})=>{
            const Service = swapiService instanceof SwapiService ?
                                DummmySwapiService : SwapiService;

            console.log('Switched to', Service.name);
            return{
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div>
                        <Header onServiceChange={this.onServiceChange}/>

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={5} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}