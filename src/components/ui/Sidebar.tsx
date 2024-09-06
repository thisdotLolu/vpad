'use client'
import React from 'react'
import { FaArrowDown, FaChevronDown } from 'react-icons/fa'
import SidebarItem from './SidebarItem'
import { useSidebarContext } from '@/contexts/SidebarContext'

function Sidebar() {
  
  return (
    <div className='text-white overflow-y-scroll sidebar fixed top-0 left-0 z-[10000] w-[300px] p-6 rounded-2xl bg-[#0b0c0d] h-screen flex flex-col justify-start gap-5'>
        <div className='pt-[70px]'>
        <div className='w-full flex flex-col items-start justify-start border-t-1 border-t-[#eeeeee4e] pt-3'>
          <p>Subscriptions</p>
           <SidebarItem
           imageSrc='https://f004.backblazeb2.com/file/vpad-dev/3b7183ab2a2be0d1f269a1fba0f83078'
           userName='Amir.Stamm'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/7d2c152c83afb3018d3c8a0f79c80ce7'
           userName='Carolina.Muller'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84'
           userName='Coralie_Hyatt6'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/fc638574ae762d85f3254802f10aa927'
           userName='Maegan9'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84'
           userName='Dejah24
           '
           />
        </div>
        <div>

        </div>
        <div className='flex hover:underline cursor-pointer w-full items-center justify-between text-[.8rem] text-gray-300'>Show More 
        </div>
        </div>
       
        <div className=''>
        <div className='w-full flex flex-col items-start justify-start border-t-1 border-t-[#eeeeee4e] pt-3'>
          <p className='font-semibold'>Followers</p>
           <SidebarItem
           imageSrc='https://f004.backblazeb2.com/file/vpad-dev/3b7183ab2a2be0d1f269a1fba0f83078'
           userName='Amir.Stamm'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/7d2c152c83afb3018d3c8a0f79c80ce7'
           userName='Carolina.Muller'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84'
           userName='Coralie_Hyatt6'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/fc638574ae762d85f3254802f10aa927'
           userName='Maegan9'
           />
           <SidebarItem
            imageSrc='https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84'
           userName='Dejah24
           '
           />
        </div>
        <div>

        </div>
        <div className='flex hover:underline cursor-pointer w-full items-center justify-between text-[.8rem] text-gray-300'>Show More 
        </div>
        </div>
       
    </div>
  )
}

export default Sidebar