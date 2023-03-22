'use client'

import React, {useEffect} from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error);
    }, [error])
  return (
    <div className=''>
        <h1>Something went wrong</h1>
        <button onClick={() => reset}>Try Again</button>
    </div>
  )
}
