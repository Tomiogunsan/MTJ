import React from 'react'

export default async function Moviepage(params) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org`)
  return (
    <div>page</div>
  )
}
