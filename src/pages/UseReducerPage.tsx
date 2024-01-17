import React, { useReducer, useRef } from 'react'

const initialState = ['useState', 'useEffect', 'useContext', 'useRef']

type ActionType = { type: 'add-notion', notion: string } | { type: 'remove-notion', index: number }

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'add-notion':
      return [...state, action.notion]
    case 'remove-notion': {
      const updatedState = [...state]
      updatedState.splice(action.index, 1)
      return updatedState
    }
    default:
      throw new Error('Unhandle type case in reducer')
  }
}

const UseRedecerPage = () => {
  // const [notions, setNotions] = useState(['useState', 'useEffect', 'useContext', 'useRef'])
  const [notions, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef<HTMLInputElement>(null)

  const addNotion = (text: string) => {
    dispatch({ type: 'add-notion', notion: text })
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    if (inputRef.current)
        addNotion(inputRef.current.value)
  }

  return (
    <section>
        <h1>Comprendre useRedecer</h1>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="notions">Notions:</label>
            <input type="text" id="notions" name="notions" ref={inputRef} />
            <button type="submit">Ajouter</button>
        </form>
        <ul>
            {notions.map((notion, index) => <li key={notion}>{notion} <button onClick={() => dispatch({ type: 'remove-notion', index })}>Remove</button></li> )}
        </ul>
    </section>
  )
}

export default UseRedecerPage