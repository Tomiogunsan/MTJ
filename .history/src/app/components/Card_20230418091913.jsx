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

        <div className="">
          <p className="line-clamp-2 text-md ">{result.overview}</p>
          <h2 className="truncate text-lg font-bold ">
            {result.title || result.name}
          </h2>
          <div className="flex items-center gap-2">
            <p>{result.release_date || result.first_air_date}</p>

            <FiThumbsUp className="h-5 mr-1 ml-3" />
            <p>{result.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Expectations & Goals: I was able to learn Typescript and Next js which was handful in contributing to Zest and Mpi project.
 Achievement: I had a grasp of what NextJs Frame work  and Typescript is all about. 
 Limitations and Challenges: Nill 
 Learning: Typescript  Developement needs: Deep and Nested Routing and also Code review
