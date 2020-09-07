import React from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

export default class ItemDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: null,
            loading: true
        }
    }

    componentDidMount() {
        this.swapiService = new SwapiService();
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId!==prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId } = this.props;
        if (!itemId) {
            return;
        }

        this.swapiService
            .getPerson(itemId)
            .then((item) => {
                this.setState({ item, loading: false });
            });
    }

    render() {
        if (!this.state.item){
            return <span>Select a person from a list</span>;
        }

        if(this.state.loading){
            return <Spinner />;
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.item;
        return (
            <div className="item-details card">
                <img className="item-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}
