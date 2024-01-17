import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './layout/Layout'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import UseStatePage from './pages/UseStatePage'
import Register from './pages/Register'
import HeroesList from './pages/HeroesList'
import { UseEffectPage } from './pages/UseEffectPage'
import Search from './pages/Search'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='heroes' element={<HeroesList />} />
        <Route path='useEffect' element={<UseEffectPage />} />
        <Route path='useState' element={<UseStatePage />} />
        <Route element={<PrivateRoute />}>
          <Route path='profile' element={<Profile />} />
        </Route>
        {/* <Route
          path='useState'
          element={
            <PrivateRoute>
              <UseStatePage />
            </PrivateRoute>
          }
        /> */}
        <Route path='search' element={<Search />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<div>Oops, page 404 à implementer</div>} />
      </Route>,
    ),
  )