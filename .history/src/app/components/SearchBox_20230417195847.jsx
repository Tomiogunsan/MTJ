'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        if(!search) return
        router.push(`/search/${search}`)
    }
  return (
    <form 
    onSubmit={handleSubmit}
    className='flex max-w-6xl mx-auto justify-between items-center px-5 '>
      
    </form>
  )
}
