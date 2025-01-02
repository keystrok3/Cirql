/* eslint-disable react/prop-types */

import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user')
        return savedUser ? JSON.parse(savedUser) : null
    })
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true'
    })
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
            console.log(response_data.user)
            localStorage.setItem('user', JSON.stringify(response_data.user))
            localStorage.setItem('isAuthenticated', 'true')
            setUser({ ...response_data.user })
            setIsAuthenticated(true)
        } catch (error) {
            setError(true)
            setErrorMessage(error.message)
        }
    }

    const logout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                credentials: 'include'
            })

            if(!response.ok) {
                setError('Not logged out')
            }
            localStorage.removeItem('isAuthenticated')
            window.location.href = '/login'
        } catch (error) {
            setError(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            user, login, error, setError, isAuthenticated, errorMessage, logout
        }}>{ children }</AuthContext.Provider>
    )
}


export default AuthProvider