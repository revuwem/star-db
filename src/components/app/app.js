import React from 'react';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import Header from '../header';
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

import './app.css';



export default class App extends React.Component {

    constructor(props) {
        super(props);  

        this.state = {
            hasError: false
        }
    }

    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />

                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}