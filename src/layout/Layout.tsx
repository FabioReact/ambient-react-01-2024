import { NavLink, Outlet } from "react-router-dom"
import { useAuthContext } from "../context/auth-context"

const Layout = () => {
  const { connected } = useAuthContext()
  // const links = [
  //   {
  //     url: 'register',
  //     name: '',
  //     protected: false,
  //   }
  // ]

  return (
    <>
      <nav className="dark:bg-slate-900 dark:text-gray-100">
        <ul className="flex justify-center gap-6 pt-1">
          <li>
            <NavLink to='heroes' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink to='search' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Search
            </NavLink>
          </li> 
          <li>
            <NavLink to='battle' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Battle
            </NavLink>
          </li> 
          {!connected && <li>
            <NavLink to='register' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Register
            </NavLink>
          </li>}
          {!connected && <li>
            <NavLink to='login' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Login
            </NavLink>
          </li>}
          {connected && <li>
            <NavLink to='profile' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Profil
            </NavLink>
          </li>}
          <li>
            <NavLink to='useEffect' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              UseEffect
            </NavLink>
          </li>
          <li>
            <NavLink to='useState' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              UseState
            </NavLink>
          </li>
          <li>
            <NavLink to='useReducer' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              UseReducer
            </NavLink>
          </li>
          <li>
            <NavLink to='optimisations' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Optimisations
            </NavLink>
          </li>
          <li>
            <NavLink to='users' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="dark:bg-slate-900 dark:text-gray-100 flex-1">
        <Outlet />
      </main>
      <footer className="dark:bg-slate-900 dark:text-gray-100">Copyright - React @2024</footer>
    </>
  )
}

export default Layout
