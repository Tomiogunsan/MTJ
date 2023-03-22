import Image from 'next/image';
import React from 'react'

export default async function Moviepage({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
  return (
    <div className='w-full '>
        <div className='p-4 md:pt-8 flex  flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
        width={500} 
        height={300}
        style={{maxWidth: '100%', height: '100%'}}
        alt='Movie poster'
        placeholder='blur'
        blurDataURL='/spinner.svg'
        className=' rounded-lg'
        />
        <div className=''>
            <h2 className='' >
                {movie.title || movie.name}</h2>
        </div>
        </div>
    </div>
  )
}
