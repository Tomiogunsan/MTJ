import React from 'react'

export default async function Moviepage(params) {
    const movieId = params.id;
    const res = await fetch(`https://api.themovie`)
  return (
    <div>page</div>
  )
}
