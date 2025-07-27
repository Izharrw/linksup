import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="h-16 bg-purple-500 flex justify-between items-center px-10 text-white">
        <div className="logo font-bold text-2xl">
            <Link href={"/"}>
            LinksUp
            </Link>
        </div>
        <ul className='flex justify-center items-center gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-2'>
                <Link href="/shorten"><button className='cursor-pointer hover:bg-[#ca83ff] bg-purple-400 font-bold p-3 py-1 rounded-lg shadow-lg'>Try Now</button></Link>
                <Link href="/github"><button className='cursor-pointer hover:bg-[#ca83ff] bg-purple-400 font-bold p-3 py-1 rounded-lg shadow-lg'>Github</button></Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
