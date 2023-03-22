import React from 'react'
import Card from './Card'

export default function Result({results}) {
  return (
    <div>
        {results.map((result) => (
            <Card 
            key={result.id} 
            result={result}/>
                
            
        ))}
    </div>
  )
}
