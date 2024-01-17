import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../api/heroes'
import HeroCard from '../components/HeroCard'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/Loading'

const HeroDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
//   const [hero, setHero] = useState<Hero|null>(null)
//   useEffect(() => {
//     getHeroById(id!).then(data => {
//         setHero(data)
//     })
//   }, [id])
  const { data: hero, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getHero', id],
    queryFn: () => getHeroById(id!)
  })
  return (
    <section className='flex flex-col items-center'>
      <p className='text-sm cursor-pointer' onClick={() => navigate(-1)}>Back to previous</p>
      <h1>Hero Details: {id}</h1>
      {isError && <p className='text-red-500'>An error occured</p> }
      <Loading isLoading={isLoading}>
        {hero && isSuccess && <HeroCard hero={hero} />}
      </Loading>
    </section>
  )
}

export default HeroDetails
