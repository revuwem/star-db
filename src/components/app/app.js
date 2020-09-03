import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './app.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {            
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({
            hasError: true
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
                <PeoplePage />  
                <PeoplePage />  
                <PeoplePage />              
            </div>
        );
    }
}