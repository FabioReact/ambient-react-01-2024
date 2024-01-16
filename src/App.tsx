import Paragraph from './Paragraph'
import HeroesList from './pages/HeroesList'
import { UseEffectPage } from './pages/UseEffectPage'
import Search from './pages/Search'
import { useCounter } from './hooks/useCounter'
import UseStatePage from './pages/UseStatePage'
import Register from './pages/Register'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from './layout/Layout'
import Profile from './pages/Profile'
import AuthContext from './context/auth-context'

const styles = {
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: '1px',
}

const Home = () => {
  const name = 'Fabio'
  const { counter } = useCounter()

  return (
    <>
      <div>
        <p>useCouter im HomePage: {counter}</p>
      </div>
      <div className='card'>
        <p style={styles} className='red'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Paragraph>Contenu enfant de la balise Paragraph</Paragraph>
      </div>
      <p className='read-the-docs'>
        Learn React with {name} - {3 + 4} - Tableau: {['useState', 'useEffect']}- Boolean:{' '}
        {true ? 'true' : 'false'} - Null: {null} - Undefined: {undefined}
      </p>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='heroes' element={<HeroesList />} />
      <Route path='profile' element={<Profile />} />
      <Route path='useEffect' element={<UseEffectPage />} />
      <Route path='useState' element={<UseStatePage />} />
      <Route path='search' element={<Search />} />
      <Route path='register' element={<Register />} />
    </Route>,
  ),
)

const App = () => {
  const authContextValues = {
    connected: false,
    accessToken: "secretToken",
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
