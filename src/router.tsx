import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './layout/Layout'
import PrivateRoute from './components/PrivateRoute'
import UseStatePage from './pages/UseStatePage'
import { UseEffectPage } from './pages/UseEffectPage'
import { lazy } from "react"
import { getHeroesByLetter } from "./api/heroes"
import { usersLoaderData } from "./pages/Users"
import { heroDetailsLoader } from "./pages/HeroDetails"

const HeroesList = lazy(() => import('./pages/HeroesList'))
const HeroDetails = lazy(() => import('./pages/HeroDetails'))
const Profile = lazy(() => import('./pages/Profile'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Search = lazy(() => import('./pages/Search'))
const Battle = lazy(() => import('./pages/Battle'))
const UseReducerPage = lazy(() => import('./pages/UseReducerPage'))
const Optimisations = lazy(() => import('./pages/Optimisations'))
const Users = lazy(() => import('./pages/Users'))

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='heroes' element={<HeroesList />} loader={({ request }) => {
          return getHeroesByLetter('A', { signal: request.signal })
        }} />
        <Route path='heroes/:id' element={<HeroDetails />} loader={heroDetailsLoader} />
        <Route path='battle' element={<Battle />} />
        <Route path='users' element={<Users />} loader={usersLoaderData} errorElement={<p>Oops, erreur non prévue</p>} />
        <Route path='useEffect' element={<UseEffectPage />} />
        <Route path='useState' element={<UseStatePage />} />
        <Route path='useReducer' element={<UseReducerPage />} />
        <Route path='optimisations' element={<Optimisations />} />
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