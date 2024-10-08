'use client'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBars, FaBell, FaSearch, FaUser } from 'react-icons/fa'
import { FaHouse, FaPencil, FaPerson } from 'react-icons/fa6'

function Navbar() {
    const pathname = usePathname()
    const {open,setOpen} = useSidebarContext()
  return (
    <div className ='bg-[#0b0c0d] w-full h-[fit-content] py-2 fixed top-0 left-0 px-10 z-[100000]'>
         <div className='flex items-center mx-auto'>
        <div className='flex items-center justify-center gap-4'>
        <div 
        onClick={()=>setOpen(!open)}
        className='hover:bg-[rgba(255,255,255,0.1) rounded-full p-2 cursor-pointer'>
        <FaBars
        />
        </div>
        
        <img
        src='/logonew.png'
        alt='logo'
        className='w-[70px] h-[70px] object-cover'
        />

        <Link 
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 px-6 text-[1.1rem] rounded-[35px]', pathname === '/'?'bg-[#1b1d1e]':"" )}
        href='/'>Home</Link>
        <Link 
         className={cn('flex mr-4 items-center hover:bg-[rgba(255,255,255,0.1)] p-2 px-6 text-[1.1rem] rounded-[35px]', pathname === '/create'?'bg-[#1b1d1e]':"" )}
        href='/create'>Create</Link>
        </div>
       

       <div className='p-3 rounded-[30px]  bg-[#1b1d1e] flex items-center flex-1 justify-start'>
       <FaSearch/>
       <input
        type='text'
        className='outline-none w-full bg-[#1b1d1e] ml-2 placeholder:text-[1.1rem]'
        placeholder='Search'
        />
       </div>
       
       <div className='flex items-center'>
        <Link
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 ml-3 text-[1.1rem] rounded-[100px]', pathname === 'notifications'?'bg-[#1b1d1e]':"" )}
         href='/notifications'
        >
        <FaBell
        size={20}
        />
        </Link>
        {/* <Link
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 ml-3 text-[1.1rem] rounded-[100px]', pathname === 'notifications'?'bg-[#1b1d1e]':"" )}
         href='/profile'
        >
        <FaUser
        size={20}
        />
           
        </Link> */}
        <Link 
        className={cn('mr-4 flex items-center justify-center w-[100px] text-center hover:bg-[rgba(255,255,255,0.1)] p-2 text-[1.1rem] rounded-[35px]', )}
        href='/signin'>Log in</Link>
        <Link 
         className={cn('flex items-center justify-center w-[100px] text-center bg-[#4c9bd4] hover:opacity-[0.9] p-2 text-[1.1rem] rounded-[35px]',)}
        href='/signup'>Sign Up</Link>
       </div>


    </div>
    </div>
  )
}

export default Navbar