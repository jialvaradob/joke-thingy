// This is basically the creation of the element, simple as done in other projects
export const createJoke = (jokeData) => {
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.innerText = jokeData.setup;

    const body = document.createElement('p');
    body.innerText = jokeData.delivery;

    container.append(title, body);
    return container;
};
//Add the separation of concerns import and exports, fix the name in the api and components DONE


