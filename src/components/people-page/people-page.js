import React from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css';

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null,
        }
    }

    onPersonSelected = (id) => {
        console.log('selected person is ', id);
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}