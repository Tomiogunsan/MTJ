import React from 'react'

export default async function SearchPage({params}) {
    const res =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTear}`)
  return (
    <div>SearchPage</div>
  )
}