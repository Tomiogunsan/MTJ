import React from 'react'

export default function Result({results}) {
  return (
    <div>
        {results.map((result) => (
            <div key={resu}>
                {result.original_title}
            </div>
        ))}
    </div>
  )
}
