// rafce
import { useRef } from 'react'
// import { HeroCard } from "../components/HeroCard"; // import nommé
import HeroCard from '../components/HeroCard'
import Loading from '../components/Loading'
import { useSearchHero } from '../hooks/useSearchHero'

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { heroes, loading, error, searchHero } = useSearchHero()

  const onSearchHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const query = inputRef.current!.value
    searchHero(query)
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
      <Loading isLoading={loading}>
        <div className='flex justify-center flex-wrap gap-6'>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </Loading>
      {error && <p className='text-red-500'>{error}</p> }
    </section>
  )
}

export default Search
