import Link from 'next/link'
import React from 'react'
import {useSearchPara}

export default function NavbarItem({title, param}) {
  return (
    <div>
        <Link 
        className={`m-4 hover:text-amber-600 font-semibold p-2 `}
        href={`/?genre=${param}`}>
        {title}
        </Link>
        
    </div>
  )
}
