import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center w-full h-full'>
        <Image src='spinner.svg' 
        alt='loading....'wisthclassName='h-96'/>
       
    </div>
  )
}