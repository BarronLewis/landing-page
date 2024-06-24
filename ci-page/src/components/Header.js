import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between item-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title="home" address="/" Icon={AiFillHome}/>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <Link href={'/'} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-teal-700 py-1 px-2 rounded-lg text-white'>CI</span>
        <span className='text-xl hidden sm:inline'>Inquiry</span>
      </Link>
    </div>
  )
}
