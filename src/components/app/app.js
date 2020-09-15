import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from '../pages';
import { StarshipDetails } from '../sw-components';

import SwapiService from '../../services/swapi-service';
import DummmySwapiService from '../../services/dummy-swapi-service';

import './app.css';

import ErrorBoundry from '../error-boundry/error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';




export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            swapiService: new SwapiService(),
            isLoggedIn: false
        }
    };

    onLoginIn = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummmySwapiService : SwapiService;

            console.log('Switched to', Service.name);
            return {
                swapiService: new Service()
            }
        })
    };

    render() {

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />


                            <Switch>
                                <Route path="/"
                                    render={() => <h2>Welcome to StarDB!</h2>}
                                    exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" component={StarshipPage} exact />
                                <Route path="/starships/:id"
                                    render={({ match, history }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />

                                <Route path="/login"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLoginIn}
                                        />
                                    )} />
                                <Route path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )}
                                />

                                <Route render={()=><h2>Page not found:(</h2>}/>
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}