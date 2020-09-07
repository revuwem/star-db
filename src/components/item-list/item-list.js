import React from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';


// This class has props onItemSelected, getData and props.children render-function
const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
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
