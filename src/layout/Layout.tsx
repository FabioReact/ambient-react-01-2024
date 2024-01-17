import { NavLink, Outlet } from "react-router-dom"
import { useAuthContext } from "../context/auth-context"

const Layout = () => {
  const { accessToken, connected } = useAuthContext()
  // const links = [
  //   {
  //     url: 'register',
  //     name: '',
  //     protected: false,
  //   }
  // ]

  return (
    <>
      <nav>
        <ul className="flex justify-center gap-6 mt-1">
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
        </ul>
      </nav>
      <Outlet />
      <footer>Copyright - React @2024</footer>
    </>
  )
}

export default Layout
