import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    //If we don't want to use loader in routes then we can use this useEffect hook to fetch
    //import React, { useEffect, useState } from 'react'
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/surajsanu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data) 
    //         console.log(data);
            
    //     })
    // },[])
  return (
    <div className=' flex flex-col text-center mx-auto w-2/3 bg-gray-600 text-white p-3 text-2xl items-center justify-center'>
      <img src={data.avatar_url} alt="Github Picture" width={300} height={300} />
      Bio : {data.bio}
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/surajsanu')
    return res.json() 
}
