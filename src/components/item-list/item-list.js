import React from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';


// This class has props onItemSelected, getData and props.children render-function
class ItemList extends React.Component {

    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item;

            const label = this.props.children(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        })
    }

    render() {

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const getWrappedData = (View) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: null
            }
        }

        componentDidMount() {
            const { getData } = this.props;
            getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />;
            }

            return <View {...this.props} data={data} />
        }
    };
}

export default getWrappedData(ItemList);
