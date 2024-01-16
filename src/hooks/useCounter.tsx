import { useState } from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  // Si l'etat future depend de la valeur actuelle, il faut passer par la fonction callback car les useState sont asynchrones
  const increment = () => {
    setCounter((counter) => counter + 1)
  }

  const decrement = () => {
    setCounter((counter) => counter - 1)
  }
  return {
    counter, // counter: counter,
    increment, // increment: increment,
    decrement, // decrement: decrement,
  }
}
