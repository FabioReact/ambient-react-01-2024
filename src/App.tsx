import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/auth-context'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FavoriteContextProvider } from './context/favorite-context'

const client = new QueryClient()

const App = () => {
  return (
    <div className='dark flex flex-col flex-grow'>
      <QueryClientProvider client={client}>
        <AuthContextProvider>
          <FavoriteContextProvider>
            <RouterProvider router={router} />
          </FavoriteContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
