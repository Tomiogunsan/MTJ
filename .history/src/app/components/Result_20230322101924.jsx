import React from 'react'
import Card from './Card'

export default function Result({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:'>
        {results.map((result) => (
            <Card 
            key={result.id} 
            result={result}/>
                
            
        ))}
    </div>
  )
}
