import React from 'react'

export default function Result({results}) {
  return (
    <div>
        {results.map((result) => (
            < key={result.id}>
                {result.original_title}
            </>
        ))}
    </div>
  )
}
