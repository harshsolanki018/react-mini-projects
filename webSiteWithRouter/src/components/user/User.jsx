import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {uid} = useParams()
    return (
        <>
        <div className='bg-gray-400 p-6 text-3xl text-white mx-8 my-4 justify-center flex' >User: {uid} </div>
        </>
    )
}

export default User
