import React from 'react'

export default function SearchBox() {
  return (
    <form className='flex max-w'>
        <input type="text"
         placeholder='Search keywords....'
         className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
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
