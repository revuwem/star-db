export default class SwapiService {

    // private member
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        const body = await response.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}

const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach((p) => console.log(p.name));
// });

swapi.getAllStarships().then((body) => {
    console.log(body);
});





// The same as getResource
// fetch('https://swapi.dev/api/people/1/')
//     .then((response) => {
//         console.log(response.status);
//         return response.json();
//     })
//     .then((body) => {
//         console.log(body);
//     });