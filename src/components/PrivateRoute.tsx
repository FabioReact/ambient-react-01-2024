import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute = () => {
  const { connected } = useAppSelector(state => state.authentication)

  if (!connected) return <Navigate to='/heroes' /> // -> va remplacer history par la nouvelle url '/heroes'
  return <Outlet />
}

export default PrivateRoute
