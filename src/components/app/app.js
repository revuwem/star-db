import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './app.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: null,
            hasError: false
        }
    }

    componentDidCatch(){
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
        if(this.state.hasError){
            return <ErrorIndicator />;
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}