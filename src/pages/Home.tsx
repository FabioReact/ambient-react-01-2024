import Paragraph from '../components/Paragraph'
import { useCounter } from '../hooks/useCounter'

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
        {name === 'Fabio' ? 'true' : 'false'} - Null: {null} - Undefined: {undefined}
      </p>
    </>
  )
}

export default Home
