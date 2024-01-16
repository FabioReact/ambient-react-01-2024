import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

// Creer un custom hook useCounter, qui doit nous retourner la valeur du compteur, une fonction increment qui permet d'incrementer, et une fonction decrement

const UseStatePage = () => {
  const [counter, setCounter] = useState(0)
  const { counter: secondCounter, increment, decrement } = useCounter()

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
    </section>
  )
}

export default UseStatePage
