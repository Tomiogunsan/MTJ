import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className=''>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
      
  )
}
