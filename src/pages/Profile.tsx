import { useState } from 'react'
import { useFavoriteContext } from '../context/favorite-context'
import { useAppSelector } from '../redux/hooks'

const Profile = () => {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const { accessToken } = useAppSelector(state => state.authentication)
  const { favoriteHeroes, saveToLocalStorage } = useFavoriteContext()

  const onChangeColorHandler = (color: string) => {
    setBackgroundColor(color)
  }

  return (
    <section>
      <h1>Profil</h1>
      <div>
        <h2>Favorite heroes:</h2>
        {favoriteHeroes.map((hero) => (
          <p key={hero.id} className='border rounded p-2 my-1 border-gray-700 hover:bg-gray-100'>
            <span className='font-semi-bold text-gray-500 pr-2'>{hero.id}</span>
            {hero.name}
          </p>
        ))}
        <button onClick={saveToLocalStorage}>Save to localStorage</button>
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
