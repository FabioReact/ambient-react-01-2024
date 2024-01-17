import { Hero } from '../types/hero'
import { Fetcher } from './fetcher'

export const getHeroesByLetter = (
  letter: string,
  options?: RequestInit | undefined,
): Promise<Hero[]> => {
  return Fetcher.get(`http://localhost:4000/heroes?name_like=^${letter}`, options)
}

export const searchHeroes = (query: string): Promise<Hero[]> => {
  return Fetcher.get(`http://localhost:4000/heroes?name_like=${query}`)
}


export const getHeroById = (id: string): Promise<Hero> => {
  return Fetcher.get(`http://localhost:4000/heroes/${id}`)
}