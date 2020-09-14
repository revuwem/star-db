import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import StarhsipDetails from '../starship-details';

import SwapiService from '../../services/swapi-service';
import DummmySwapiService from '../../services/dummy-swapi-service';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';



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
                    <Router>
                        <div>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Route path="/"
                                   render={() => <h2>Welcome to StarDB!</h2>}
                                   exact />
                            <Route path="/people/:id?" component={PeoplePage} />

                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} exact/>
                            <Route path="/starships/:id"
                                   render={({match, history}) => {
                                        const { id } = match.params;                                    
                                        return <StarshipDetails itemId={id}/>
                                   }}/>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}