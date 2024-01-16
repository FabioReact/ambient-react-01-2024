import { createContext } from "react";

type AuthContextType = {
    // email: string
    accessToken: string
    connected: boolean
}

const AuthContext = createContext<AuthContextType>(null!)

export default AuthContext