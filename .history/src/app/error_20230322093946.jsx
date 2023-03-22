'use client'

import React, {useEffect} from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error);
    }, [error])
  return (
    <div>
        <h1>Something went wrong</h1>
        <button onClick={}>Try Again</button>
    </div>
  )
}
