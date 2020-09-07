import React from 'react';
import ItemList from '../item-list';
import {getWrappedData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const PersonList = getWrappedData(ItemList, getAllPeople);

const PlanetList = getWrappedData(ItemList, getAllPlanets);

const StarshipList = getWrappedData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
