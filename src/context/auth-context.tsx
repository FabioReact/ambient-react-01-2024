import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  // email: string
  accessToken: string
  connected: boolean
  login: (token: string) => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const useAuthContext = () => useContext(AuthContext)

type Props = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [connected, setConnected] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const login = (token: string) => {
    setConnected(true)
    setAccessToken(token)
  }

  const authContextValues = {
    connected: connected,
    accessToken: accessToken,
    login: login,
  }
  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>
}

// export const addition = (a: number, b: number) => a + b
