import Link from 'next/link'
import React from 'react'

export default function NavbarItem({title, param}) {
  return (
    <div>
        <Link href={`/?genre=${param}`}>
        </Link>
        <h1>{title}</h1>
    </div>
  )
}
