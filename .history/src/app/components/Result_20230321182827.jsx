import React from 'react'

export default function Result({results}) {
  return (
    <div>
        {results.map((result) => (
            <div>
                {result.origi}
            </div>
        ))}
    </div>
  )
}
