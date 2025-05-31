import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Userdatacontext=createContext()

const Usercontext = ({children}) => {
    const [userData, setuserData] = useState(() => {
        // Try to get initial data from localStorage
        const savedUserData = localStorage.getItem('userData')
        return savedUserData ? JSON.parse(savedUserData) : null
    })

    // Effect to save userData to localStorage whenever it changes
    useEffect(() => {
        if (userData) {
            console.log("run");
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    }, [userData])

    // Effect to check authentication status on app load
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token')
            if (token && !userData) {
                try {
                    const response = await axios.get('http://localhost:9090/user/profile', {
                        withCredentials: true
                    })
                    
                    if (response.status === 200) {
                        setuserData(response.data.user)
                    }
                } catch (error) {
                    console.error('Auth check failed:', error)
                    // Clear invalid token
                    localStorage.removeItem('token')
                    localStorage.removeItem('userData')
                    setuserData(null)
                }
            }
        }

        checkAuth()
    }, [])

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        setuserData(null)
    }

    // Function to update user data
    const updateUserData = (newData) => {
        setuserData(prevData => {
            const updatedData = { ...prevData, ...newData }
            localStorage.setItem('userData', JSON.stringify(updatedData))
            return updatedData
        })
    }

    return (
        <Userdatacontext.Provider value={{ 
            userData, 
            setuserData: updateUserData,
            logout 
        }}>
            {children}
        </Userdatacontext.Provider>
    )
}

export default Usercontext