import React from 'react';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';



export default class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />}
            />
        );
    }
}