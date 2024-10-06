import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
            <Link href='/studentlist/Anand'>Anand</Link>
        </li>
        <li><Link href='/studentlist/pam'>pam</Link></li>
        <li><Link href='/studentlist/kalin'>kalin</Link></li>
        <li><Link href='/studentlist/zonal'>zonal</Link></li>
      </ul>
    </div>
  )
}

export default page
