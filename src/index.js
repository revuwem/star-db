const getResource = async(url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
}

getResource('https://swapi.dev/api/people/y/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        // rejects if connection error happened
        console.log('Could not fetch', err);
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