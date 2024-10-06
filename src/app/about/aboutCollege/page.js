'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


const page = () => {

    const router = useRouter();
    return (
        <div>
            aboutCollege

            <Link href='/about/aboutStudent'>go to anandt</Link>
            <button onClick={()=> router.push('/about/aboutStudent')}>go to student</button>
        </div>
    )
}

export default page
