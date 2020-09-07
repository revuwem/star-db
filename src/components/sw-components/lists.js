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

const renderPersonListItemLabel = ({name}) => <span>{name}</span>;  
const PersonList = withData(
        withChildFunction(ItemList, renderPersonListItemLabel), 
        getAllPeople
);

const renderPlanetListItemLabel = ({name, population}) => <span>{name} ({population})</span>;
const PlanetList = withData(
        withChildFunction(ItemList, renderPlanetListItemLabel), 
        getAllPlanets
);

const renderStarshipListItemLabel = ({name, model}) => <span>{name} - {model}</span>;
const StarshipList = withData(
            withChildFunction(ItemList, renderStarshipListItemLabel), 
            getAllStarships
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
