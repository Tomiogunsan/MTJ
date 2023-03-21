import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon }) {
  return (
    <div>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600 '>
            <Icon className='/>
        <p>{title}</p>
        </Link>
    </div>
  )
}
