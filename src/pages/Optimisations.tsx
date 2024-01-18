import { memo, useCallback, useMemo, useState } from 'react'

type ChildComponentProps = { content: string }

const ChildComponent = memo(({ content }: ChildComponentProps) => {
  console.log('Render de ChildComponent')
  return <p>Ceci est un composant enfant - {content}</p>
}, (prevProps, nextProps) => {
    if (prevProps.content !== nextProps.content)
      return false
    return true
})

// React.memo est utile pour mémoïser un composant selon des props données
const Button = memo(({ children, onClick = () => {}}: { children: React.ReactNode, onClick?: () => void }) => {
  console.log(`Render du Button ${children}`)
  return (<button onClick={onClick}>{children}</button>)
})

const expensiveCompute = (a: number, b: number) => {
  let counter = 1000000000
  while(counter > 0) {
    counter--
  }
  return a * b
}

const Optimisations = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState(5)
  // useCallback est utile pour memoïser la reference d'une fonction
  const increment = useCallback(() => setCounter((c) => c + 1), [])
  const decrement = useCallback(() => setCounter((c) => c - 1), [])
  const incrementByValue = useCallback(() => setCounter((c) => c + value), [value])
  // useMemo est utilse pour memoïser le résultat d'une fonction
  const resultOfExpensiveCompute = useMemo(() => expensiveCompute(3, value), [value])
  return (
    <section>
      <h1>Optimisations</h1>
      <p>Counter: {counter}</p>
      <input type="number" value={value} onChange={e => setValue(+e.target.value)} />
      <p>Valeur du resultat du calcul intensif: {resultOfExpensiveCompute}</p>
      <Button onClick={increment}>Incrementer</Button>
      <Button onClick={incrementByValue}>Incrementer by value</Button>
      <Button onClick={decrement}>Decrementer</Button>
      <ChildComponent content='Contenu de la props' />
    </section>
  )
}

export default Optimisations
