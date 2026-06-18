import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harshsolanki018')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='bg-gray-400 p-6 text-2xl  text-white mx-8 my-4 justify-center flex' >
            <img className='rounded-3xl object-cover mx-4 shadow-2xl' src={data.avatar_url} alt="gitProfile"  width={300}/>
            <div className='justify-centery  py-15 px-10 text-gray-700'>
            <p className='text-gray-800 text-3xl'>Name: {data.name}</p>
            <p>ID: {data.id}</p>
            <p>User Name: {data.login}</p>        
            <p>GitHub Followers : {data.followers}</p>
            <p>Location : {data.location}</p>
            </div>
        </div>
    )
}

export default Github

export const GithubInfoLoader = async()=> {
    const res = await  fetch('https://api.github.com/users/harshsolanki018')
    return res.json()
}