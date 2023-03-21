import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';
export default function Header() {
  return (
    <div>
        <div className='flex'>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
            <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div>
            <Link href='/'>
                <h2><span>MJT</span></h2>
            </Link>
        </div>
    </div>
  )
}
