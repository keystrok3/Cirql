/* eslint-disable react/prop-types */

import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")



    const login = async (userdata) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            })

            const response_data = await response.json()

            if(!response.ok) {
                console.log(response_data.error.message)
                setError(true)
                setErrorMessage(response_data.error.message)
                return
            }
            console.log(response_data)
            setIsAuthenticated(true)
        } catch (error) {
            setError(true)
            setErrorMessage(error.message)
        }
    }

    return (
        <AuthContext.Provider value={{
            user, login, error, setError, isAuthenticated, errorMessage
        }}>{ children }</AuthContext.Provider>
    )
}


export default AuthProvider