import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon }) {
  return (
    <div>
        <Link href={address}>
            Ic
        <p>{title}</p>
        </Link>
    </div>
  )
}
