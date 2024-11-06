'use client'
import ProfileComponent from '@/components/profile/ProfileComponent'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import { useSidebarContext } from '@/contexts/SidebarContext'
import React from 'react'

function ProfilePage() {
    const {open,setOpen} = useSidebarContext()
    
  return (
    <>
    
    <Navbar/>
    {open && <Sidebar/>}
    <ProfileComponent/>
    </>
  )
}

export default ProfilePage