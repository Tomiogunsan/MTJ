import React from 'react'

export default async function SearchPage({params}) {
    const res =  await fetch(`https://api.themoviedb.org`)
  return (
    <div>SearchPage</div>
  )
}
