import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction } from '../hoc-helpers';

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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                        withData(
                            withChildFunction(renderPersonListItemLabel)(
                                ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                        withData(
                            withChildFunction(renderPlanetListItemLabel)(
                                ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                            withChildFunction(renderStarshipListItemLabel)(
                                ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};
