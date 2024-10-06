'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();
  return (
    <div>
      <h2>about page</h2>
      <button onClick={()=> router.push('/login')}>go to login page</button>
    </div>
  )
}

export default page
