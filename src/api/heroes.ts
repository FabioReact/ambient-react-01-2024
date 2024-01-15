import { Hero } from "../types/hero";

class Fetcher {
    static get(url: string, options?: RequestInit | undefined) {
        return fetch(url, options)
            .then((response) => response.json())
    }
}

export const getHeroesByLetter = (letter: string, options?: RequestInit | undefined): Promise<Hero[]> => {
  return Fetcher.get(`http://localhost:4000/heroes?name_like=^${letter}`, options)
};

