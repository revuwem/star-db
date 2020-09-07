import React from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
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

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(item) => (
                    `${item.name}, ${item.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}