import { useLoaderData } from 'react-router-dom'
import { getUsers } from '../api/users'
import { User } from '../types/user'

const Users = () => {
  const data = useLoaderData() as User[]
  return (
    <section>
        <h1>Users</h1>
        <ul>
            {data.map(user => <li key={user.email}>{JSON.stringify(user, null, 2)}</li> )}
        </ul>
    </section>
  )
}

export const usersLoaderData = () => getUsers()

export default Users