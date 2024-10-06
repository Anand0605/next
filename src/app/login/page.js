'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {

    const router = useRouter();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>router.push('/about')}>go to about page</button>
    </div>
  )
}

export default page
