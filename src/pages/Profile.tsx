import { useContext, useState } from 'react'
import AuthContext from '../context/auth-context'

const Profile = () => {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const { accessToken, connected } = useContext(AuthContext)
  console.log({
    accessToken,
    connected,
  })

  const onChangeColorHandler = (color: string) => {
    setBackgroundColor(color)
  }

  return (
    <section>
      <h1>Profil</h1>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        Choose theme:
        <ThemeManager callback={onChangeColorHandler} />
      </div>
    </section>
  )
}

type ThemeManagerProps = {
  callback: (color: string) => void
}

const ThemeManager = ({ callback }: ThemeManagerProps) => {
  return (
    <div>
      <input type='color' name='color' id='color' onBlur={(e) => callback(e.target.value)} />
    </div>
  )
}



export default Profile
