import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 
    sm:shadow-md group rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          alt="image is not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 "
        />

       
      </Link>
    </div>
  );
}

 
