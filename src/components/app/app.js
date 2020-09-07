import React from 'react';

import ErrorIndicator from '../error-indicator';
import Header from '../header';

import SwapiService from '../../services/swapi-service';

import './app.css';
import Row from '../row';
import ItemDetails, { Record } from '../item-details';



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

        const { getPerson, getPersonImage, getStarship, getStarshipImage } = this.swapiService;

        const personDetais = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model" />
                <Record field="crew" label="Crew" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>
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