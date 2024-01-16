import { useState } from 'react'
import { Hero } from '../types/hero'
import { searchHeroes } from '../api/heroes'

export const useSearchHero = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const searchHero = async (query: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await searchHeroes(query)
      setHeroes(data)
    } catch (e) {
      setError('Error while fetching')
    } finally {
      setLoading(false)
    }
  }

  return {
    heroes, // heroes: heroes,
    loading,
    error,
    searchHero,
  }
}
