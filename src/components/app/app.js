import React from 'react';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import Header from '../header';
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';

import './app.css';
import Row from '../row';
import ItemDetails from '../item-details';



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

        const {getPerson, getPersonImage, getStarship, getStarshipImage} = this.swapiService;

        const personDetais = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        );

        return (
            <div>
                <Header />
                {/* <RandomPlanet />
                <ErrorButton />
                <PeoplePage /> */}

                <Row 
                    left={personDetais}
                    right={starshipDetails} />
                
            </div>
        );
    }
}