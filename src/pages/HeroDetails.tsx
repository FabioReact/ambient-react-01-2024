import { LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom'
import { getHeroById } from '../api/heroes'
import HeroCard from '../components/HeroCard'
import { Hero } from '../types/hero'

const HeroDetails = () => {
  const hero = useLoaderData() as Hero
  const navigate = useNavigate()
  return (
    <section className='flex flex-col items-center'>
      <p className='text-sm cursor-pointer' onClick={() => navigate(-1)}>Back to previous</p>
      <h1>Hero Details: {hero.id}</h1>
      <HeroCard hero={hero} />
    </section>
  )
}

export const heroDetailsLoader = ({ params }: LoaderFunctionArgs<{ id: string }>) => getHeroById(params.id!)

export default HeroDetails
