import { createContext, useContext, useState } from "react"
import { Hero } from "../types/hero"
import { useLocalStorage } from "usehooks-ts"

type FavoriteContextType = {
    favoriteHeroes: Array<Hero>
    addHeroToFavorites: (hero: Hero) => void
    saveToLocalStorage: () => void
}

const FavoriteContext = createContext<FavoriteContextType>(null!)

export const useFavoriteContext = () => useContext(FavoriteContext)

type Props = {
    children: React.ReactNode
}

export const FavoriteContextProvider = ({ children }: Props) => {
    const [savedFavorites, setSavedFavorites] = useLocalStorage<Hero[]>('favortiesHeroes', [])
    const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[]>(savedFavorites)
    const addHeroToFavorites = (hero: Hero) => {
        setFavoriteHeroes(prevHeroes => {
            const heroes = [...prevHeroes]
            const heroIndex = heroes.findIndex(prevHero => prevHero.id === hero.id)
            if (heroIndex === -1) {
                heroes.push(hero)
            }
            return heroes
        })
    }
    const saveToLocalStorage = () => {
        setSavedFavorites(favoriteHeroes)
      }
    const context = {
        favoriteHeroes,
        addHeroToFavorites,
        saveToLocalStorage,
    }
    return (
        <FavoriteContext.Provider value={context}>
            {children}
        </FavoriteContext.Provider>
    )
}