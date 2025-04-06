"use client"

import { createContext } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [session, setSession] = useState()

    const contextVal = {
        session,
        setSession
    }

    return(
        <AuthContext.Provider value={contextVal}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider