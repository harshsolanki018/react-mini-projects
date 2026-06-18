import React, { Children, useState } from 'react'
import UserContext from './userContext'

function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
//  console.log(user)
    
    return (
        <>
        <UserContext.Provider value= {{user, setUser}}>
        {children}
        </UserContext.Provider>

        </>
    )
}

export default UserContextProvider
