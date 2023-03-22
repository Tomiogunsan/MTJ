'use client';

import React from 'react'

export default function SearchBox() {
    const [serach, setSearch] = useState
  return (
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5 '>
        <input type="text"
         placeholder='Search keywords....'
         className='w-full flex-1 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
         />
         <button 
         type='submit'
         className='text-amber-600 disabled:text-gray-400 '
         >
            Search
         </button>
    </form>
  )
}
