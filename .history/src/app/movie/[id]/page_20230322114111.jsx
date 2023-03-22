import React from 'react'

export default async function Moviepage({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
  return (
    <div className='w-full '>
        <h1>{movie.title || movie.name}</h1>
    </div>
  )
}