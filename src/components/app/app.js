import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

   
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />

                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
}