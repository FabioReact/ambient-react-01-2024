import { Fetcher } from './fetcher'

export const registerUser = (email: string, password: string) => {
  return Fetcher.post('http://localhost:4000/register', {
    email,
    password,
  })
}

export const loginUser = (email: string, password: string) => {
  return Fetcher.post('http://localhost:4000/login', {
    email,
    password,
  })
}