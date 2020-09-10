import React from 'react';

import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../row';



export default class PlanetPage extends React.Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );
    }
}