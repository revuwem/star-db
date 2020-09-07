import React from 'react';

import {getWrappedData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

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

const {getAllPeople} = new SwapiService();

export default getWrappedData(ItemList, getAllPeople);
