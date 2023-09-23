// handler.js
import { getJokes } from './api.js';
import { createJoke } from './components.js';

export const jokeHandler = async () => {
    const jokes = await getJokes();
    jokes.forEach((jokeData) => {
        const jokeDom = createJoke(jokeData);
        dom.root.append(jokeDom);
    });
};