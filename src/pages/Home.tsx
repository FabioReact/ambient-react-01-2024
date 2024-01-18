import { decrement, increment, incrementByAmount } from "../redux/reducers/counterSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Home = () => {
  // const counter = useSelector((state: RootState) => state.counter)
  const counter = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <p>Value of counter in store: {counter.value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default Home
