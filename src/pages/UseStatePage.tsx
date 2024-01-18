import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useAppSelector } from '../redux/hooks'
import { selectCount } from '../redux/reducers/counterSlice'

// Creer un custom hook useCounter, qui doit nous retourner la valeur du compteur, une fonction increment qui permet d'incrementer, et une fonction decrement

const UseStatePage = () => {
  const [counter, setCounter] = useState(0)
  const { counter: secondCounter, increment, decrement } = useCounter()
  const counterStoreValue = useAppSelector(state => selectCount(state))

  // Si l'etat future depend de la valeur actuelle, il faut passer par la fonction callback car les useState sont asynchrones
  const onIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1) // 0 + 1
    setCounter((prevCounter) => prevCounter + 1) // 1 + 1
  }
  return (
    <section>
      <h1>Comprendre UseState</h1>
      <div>
        <p>Classic counter:</p>
        <button onClick={onIncrement}>Incrémenter - {counter}</button>
      </div>
      <div>
        <p>useCounter: {secondCounter}</p>
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
      </div>
      <p>Value of counter is redux store: {counterStoreValue}</p>
    </section>
  )
}

export default UseStatePage
