// rafce
import { useRef, useState } from 'react'
import { searchHeroes } from '../api/heroes'
import { Hero } from '../types/hero'
// import { HeroCard } from "../components/HeroCard"; // import nommé
import HeroCard from '../components/HeroCard'

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [heroes, setHeroes] = useState<Hero[]>([])

  const onSearchHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(`Vous avez recherché: ${inputRef.current?.value}`)
    const query = inputRef.current!.value
    const data = await searchHeroes(query)
    setHeroes(data)
  }

  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={onSearchHandler}>
        <fieldset>
          <label htmlFor='search'>Search:</label>
          <input type='text' id='search' name='search' ref={inputRef} />
        </fieldset>
        <button type='submit'>Search Hero</button>
      </form>
      <div className='flex justify-center flex-wrap gap-6'>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  )
}

export default Search
