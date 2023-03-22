import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const API_KEY = process.env.API_KEY

export default  async function Home({searchParams}) {
const genre = searchParams.genre || 'fetchTrending'
const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}`)
  return (
    <div>
      
    </div>
  )
}
