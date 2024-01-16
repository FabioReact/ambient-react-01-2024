import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
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
            <NavLink to='register' className={({ isActive }) => (isActive ? 'text-red-600' : '')}>
              Register
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
