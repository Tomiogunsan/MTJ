import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center w-full '>
        <img src='spinner.svg' 
        alt='loading....' className='h-96'/>
       
    </div>
  )
}