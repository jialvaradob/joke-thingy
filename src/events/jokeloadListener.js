// listener.js

import { jokeHandler } from './handler.js';

// THis have to be here to connect the handler as the loading page requires this from the start
window.addEventListener('load', jokeHandler);