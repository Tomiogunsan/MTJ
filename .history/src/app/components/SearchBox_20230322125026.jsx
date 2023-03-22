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
        <input type="text"
        value={search}
        onChange={(e)=> setSearch
        (e.target.value)}
         placeholder='Search keywords....'
         className='w-full flex-1 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
         />
         <button 
         disabled={!search}
         type='submit'
         className='text-amber-600 disabled:text-gray-400 '
         >
            Search
         </button>
    </form>
  )
}
