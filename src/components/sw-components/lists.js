import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) =>{
    return (props)=>{
        return <Wrapped {...props}>
            {fn}
        </Wrapped>
    }
};

const renderLabel = ({name}) => <span>{name}</span>;  

const PersonList = withData(
        withChildFunction(ItemList, renderLabel), 
        getAllPeople
);

const PlanetList = withData(
        withChildFunction(ItemList, renderLabel), 
        getAllPlanets
);

const StarshipList = withData(
            withChildFunction(ItemList, renderLabel), 
            getAllStarships
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
