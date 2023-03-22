import React from 'react'
import Card from './Card'

export default function Result({results}) {
  return (
    <div className='sm:grid sm'>
        {results.map((result) => (
            <Card 
            key={result.id} 
            result={result}/>
                
            
        ))}
    </div>
  )
}
