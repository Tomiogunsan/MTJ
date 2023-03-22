import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className=''>
        <Image src='spinner.svg' alt='loading....' />
    </div>
  )
}