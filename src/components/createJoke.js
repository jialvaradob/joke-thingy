// components
const createJoke = (jokeData) => {
    // container
    const container = document.createElement('div');
    container.classList.add('container');

    // title
    const title = document.createElement('h2');
    title.innerText = jokeData.setup;

    // body
    const body = document.createElement('p');
    body.innerText = jokeData.delivery;

    container.append(title, body);
    return container;
};

//Add the separation of concerns import and exports, fix the name in the api and components