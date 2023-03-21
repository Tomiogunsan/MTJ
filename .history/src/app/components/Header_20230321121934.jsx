import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';

export default function Header() {
  return (
    <div>
        <div>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}/>
            <MenuItem title='A' address='/' Icon={AiFillHome}/>
        </div>
        <div></div>
    </div>
  )
}
