import React from 'react';

import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import './people-page.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null
        }
    }

    swapiService = new SwapiService();    

    onPersonSelected = (id) => {
        console.log('selected person is ', id);
        this.setState({
            selectedPerson: id
        })
    }

    render() {       

        const {getAllPeople, getPerson, getPersonImage} = this.swapiService;

        const peopleList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={getAllPeople}>
                {(item) => (
                    `${item.name}, ${item.birthYear}`
                )}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <Row left={peopleList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}