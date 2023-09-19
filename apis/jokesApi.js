const getJokes = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error(
                `Failed to get jokes lul : ${res.status}`,
            );
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export getJokes;