// With this version i could bypass the error from VSCODE

export async function getJokes() {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error(`Failed to get jokes: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}



// Trying the new async and wait 

/*export const getJokes = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error(`Failed to get jokes: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
*/
// Tried to use first this function to see the difference, seems more readable on top.
/*
export function getJokes() {
    return fetch('https://v2.jokeapi.dev/joke/Any')
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to get jokes: ${res.status}`);
            }
            return res.json();
        })
        .catch((err) => {
            console.error(err);
        });
}
*/