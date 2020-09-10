import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>
            {fn}
        </Wrapped>
    }
};

const renderPersonListItemLabel = ({ name }) => <span>{name}</span>;
const renderPlanetListItemLabel = ({ name, population }) => <span>{name} ({population})</span>;
const renderStarshipListItemLabel = ({ name, model }) => <span>{name} - {model}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderPersonListItemLabel)),
                        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderPlanetListItemLabel)),
                        mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderStarshipListItemLabel)),
                        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};
