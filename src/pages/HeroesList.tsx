import { useEffect, useState } from 'react'
import { Hero } from '../types/hero'
import { getHeroesByLetter } from '../api/heroes'
import HeroCard from '../components/HeroCard'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const arrayOfLetters: string[] = []
for (let index = 65; index < 91; index++) {
  const letter = String.fromCharCode(index)
  arrayOfLetters.push(letter)
}

// Regles fonction pure
// input A en entree, on a toujours B en sortie
// Pas d'asynchrone, pas d'appel reseau
// Ne modifie pas le scope

const getActiveClassName = (condition: boolean) => {
  return condition ? 'text-red-600 cursor-pointer' : 'cursor-pointer'
}

const HeroesList = () => {
  // Declaration des useState
  const [selectedLetter, setSelectedLetter] = useState<string>('A')
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Declaration des useEffect
  useEffect(() => {
    const controller = new AbortController()
    getHeroesByLetter('A', { signal: controller.signal }).then((data) => {
      setLoading(false)
      setHeroes(data)
    })
    return () => {
      controller.abort()
    }
  }, [])

  const onClickHandler = (letter: string) => {
    setSelectedLetter(letter)
    setLoading(true)
    getHeroesByLetter(letter).then((data) => {
      setLoading(false)
      setHeroes(data)
    })
  }

  return (
    <section>
      <h1>Heroes List</h1>
      <ul className='flex justify-center gap-3 text-xl font-semibold'>
        {arrayOfLetters.map((letter) => (
          <li
            key={letter}
            onClick={() => onClickHandler(letter)}
            className={getActiveClassName(letter === selectedLetter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <p>Vous avez cliqué sur la lettre: {selectedLetter}</p>
      <Loading isLoading={loading}>
        <div className='flex justify-center flex-wrap gap-6'>
          {heroes.map((hero) => (
            <Link to={`${hero.id}`} key={hero.id}>
              <HeroCard hero={hero} />
            </Link>
          ))}
        </div>
      </Loading>
    </section>
  )
}

export default HeroesList
