import React from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';


const Row = ({left, right}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null,
            hasError: false
        }
    }

    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        console.log('selected person is ', id);
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}