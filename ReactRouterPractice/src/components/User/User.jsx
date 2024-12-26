import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' mx-auto w-2/3 text-center bg-gray-600 text-white text-2xl p-3'>
      User:{userid}
    </div>
  )
}

export default User
