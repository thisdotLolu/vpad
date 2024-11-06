'use client'
import CreateComponent from '@/components/create/CreateComponent'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import { useSidebarContext } from '@/contexts/SidebarContext'
import React from 'react'

function CreatePage() {
    const {open,setOpen} = useSidebarContext()
  return (
   <>
   <Navbar/>
   {open && <Sidebar/>}
   <CreateComponent/>
   </>
  )
}

export default CreatePage