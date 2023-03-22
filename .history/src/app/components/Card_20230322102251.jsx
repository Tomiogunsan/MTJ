import React from 'react'

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 
    sm:'>
        {result.id}
    </div>
  )
}
