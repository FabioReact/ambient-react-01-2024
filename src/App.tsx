import Paragraph from './Paragraph'
import HeroesList from './pages/HeroesList'
import { UseEffectPage } from './pages/UseEffectPage'
import { useState } from 'react'
import Search from './pages/Search'
import { useCounter } from './hooks/useCounter'
import UseStatePage from './pages/UseStatePage'
import Register from './pages/Register'

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

function App() {
  // const activePAge = "";
  const [activePage, setActivePage] = useState('home')

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setActivePage('useEffect')}>UseEffect</li>
          <li onClick={() => setActivePage('useState')}>UseState</li>
          <li onClick={() => setActivePage('heroes')}>HeroesList</li>
          <li onClick={() => setActivePage('search')}>Search</li>
          <li onClick={() => setActivePage('register')}>Register</li>
        </ul>
      </nav>
      <h1>Vite + React</h1>
      {activePage === 'useEffect' && <UseEffectPage />}
      {activePage === 'useState' && <UseStatePage />}
      {activePage === 'heroes' && <HeroesList />}
      {activePage === 'search' && <Search />}
      {activePage === 'register' && <Register />}
    </>
  )
}

export default App
