import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/auth-context'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FavoriteContextProvider } from './context/favorite-context'
import { Suspense } from 'react'
import Spinner from './components/Spinner/Spinner'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const client = new QueryClient()

const App = () => {
  return (
    <div className='dark flex flex-col flex-grow'>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <AuthContextProvider>
            <FavoriteContextProvider>
              <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
              </Suspense>
            </FavoriteContextProvider>
          </AuthContextProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  )
}

export default App
