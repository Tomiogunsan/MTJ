import React from 'react'

export default async function SearchPage({params}) {
    const res =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
  
    if(!res.ok){
        throw new Error('Error fecthing data')
    }

    const data = await res.json();

    const results = data.results
    
    return (
    <div>
        {results &&}
    </div>
  )
}
