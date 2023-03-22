import React from 'react'

export default async function Moviepage(params) {
    const movieId = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
  return (
    <div>
        <h1>{}</h1>
    </div>
  )
}
