import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const API_KEY = process.env.API_KEY

export default  async function Home({searchParams}) {
const genre = searchParams.genre || 'fetchTrending'
const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
 }?api_key=${API_KEY}&language=en-US&page=1`,{ next:{revalidate: 10000} } )

 const data = await res.json(),
 return (
    <div>
      
    </div>
  )
}
