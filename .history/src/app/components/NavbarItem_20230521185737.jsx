'use client'

import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
      
    </div>
  );
}
