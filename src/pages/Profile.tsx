import { useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { useLocalStorage } from 'usehooks-ts'
import { Hero } from '../types/hero'

const Profile = () => {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const { accessToken } = useAppSelector(state => state.authentication)
  const { heroes } = useAppSelector(state => state.favoriteHeroes)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedFavorites, setSavedFavorites] = useLocalStorage<Hero[]>('favortiesHeroes', [])

  const onChangeColorHandler = (color: string) => {
    setBackgroundColor(color)
  }

  return (
    <section>
      <h1>Profil</h1>
      <div>
        <h2>Favorite heroes:</h2>
        {heroes.map((hero) => (
          <p key={hero.id} className='border rounded p-2 my-1 border-gray-700 hover:bg-gray-100'>
            <span className='font-semi-bold text-gray-500 pr-2'>{hero.id}</span>
            {hero.name}
          </p>
        ))}
        <button onClick={() => setSavedFavorites(heroes)}>Save to localStorage</button>
      </div>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        Choose theme:
        <ThemeManager callback={onChangeColorHandler} />
      </div>
      <p>Access Token: {accessToken}</p>
    </section>
  )
}

type ThemeManagerProps = {
  callback: (color: string) => void
}
// Props drilling
const ThemeManager = ({ callback }: ThemeManagerProps) => {
  return (
    <div>
      <input type='color' name='color' id='color' onBlur={(e) => callback(e.target.value)} />
    </div>
  )
}

export default Profile
