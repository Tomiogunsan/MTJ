import React from 'react'

export default async function SearchPage({params}) {
    const res =  await fetch(`https://api.themovied`)
  return (
    <div>SearchPage</div>
  )
}
