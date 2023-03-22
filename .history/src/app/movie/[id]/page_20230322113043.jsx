import React from 'react'

export default async function Moviepage(params) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env}`)
  return (
    <div>page</div>
  )
}
