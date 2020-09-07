import React from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}

export {
    Record
};

export default class ItemDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: null,
            image: null,
            loading: true
        }
    }

    componentDidMount() {
        this.swapiService = new SwapiService();
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                });
            });
    }

    render() {

        const { item, image, loading } = this.state;
        if (!item) {
            return <span>Select an item from a list</span>;
        }

        if (loading) {
            return <Spinner />;
        }

        const { name } = item;
        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child, idx)=>{
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}
