import Link from 'next/link'
import React from 'react'

export default function NavbarItem({title, param}) {
  return (
    <div>
        <Link 
        className={`m-4 hover:text-amber-600 f`}
        href={`/?genre=${param}`}>
        {title}
        </Link>
        
    </div>
  )
}
