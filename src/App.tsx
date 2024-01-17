import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/auth-context'
import { router } from './router'

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
