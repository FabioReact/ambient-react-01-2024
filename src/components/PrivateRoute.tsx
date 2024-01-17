import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const PrivateRoute = () => {
  const { connected } = useAuthContext()

  if (!connected) return <Navigate to='/heroes' /> // -> va remplacer history par la nouvelle url '/heroes'
  return <Outlet />
}

export default PrivateRoute
