import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/auth-context'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
