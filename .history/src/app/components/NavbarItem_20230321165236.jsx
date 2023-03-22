import Link from 'next/link'
import React from 'react'

export default function NavbarItem({title, param}) {
  return (
    <div>
        <Link 
        className={``}
        href={`/?genre=${param}`}>
        {title}
        </Link>
        
    </div>
  )
}
