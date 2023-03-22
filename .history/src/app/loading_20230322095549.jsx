import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div clas>
        <Image src='spinner.svg' alt='loading....' />
    </div>
  )
}