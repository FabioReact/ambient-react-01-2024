import { NavLink, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout } from '../redux/reducers/authenticationSlice'

type NavLinkElementProps = {
  path: string
  label: string
  status?: 'all' | 'public' | 'authenticated'
}

const NavLinkElement = ({ label, path, status = 'all' }: NavLinkElementProps) => {
  const { connected } = useAppSelector((state) => state.authentication)
  if (status === 'authenticated' && !connected) return null
  if (status === 'public' && connected) return null
  return (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
        {label}
      </NavLink>
    </li>
  )
}

const Layout = () => {
  const { connected } = useAppSelector((state) => state.authentication)
  const dispatch = useAppDispatch()
  return (
    <>
      <nav className='dark:bg-slate-900 dark:text-gray-100'>
        <ul className='flex justify-center gap-6 pt-1'>
          <NavLinkElement path='/' label='Home' />
          <NavLinkElement path='heroes' label='Heroes' />
          <NavLinkElement path='search' label='Search' />
          <NavLinkElement path='battle' label='Battle' />
          <NavLinkElement path='login' label='Login' status='public' />
          <NavLinkElement path='register' label='Register' status='public' />
          <NavLinkElement path='profile' label='Profile' status='authenticated' />
          <NavLinkElement path='useEffect' label='UseEffect' />
          <NavLinkElement path='useState' label='UseState' />
          <NavLinkElement path='useReducer' label='UseReducer' />
          <NavLinkElement path='optimisations' label='Optimisations' />
          {connected && <li onClick={() => dispatch(logout())}>Logout</li>}
        </ul>
      </nav>
      <main className='dark:bg-slate-900 dark:text-gray-100 flex-1'>
        <Outlet />
      </main>
      <footer className='dark:bg-slate-900 dark:text-gray-100'>Copyright - React @2024</footer>
    </>
  )
}

export default Layout
