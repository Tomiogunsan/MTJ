import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
export default function Header() {
  return (
    <div className='flex justify-between items-center mx-2 py-6 max-w-6xl sm:mx-auto'>
        <div className='flex'>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
            <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div className=''>
            <DarkModeSwitch />
            <Link href='/'>
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>MTJ</span>
                    </h2>
            </Link>
        </div>
    </div>
  )
}
