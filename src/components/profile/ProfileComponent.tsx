import React from 'react'
import Button from '../ui/Button'
import TabsComponent from '../ui/Tabs'

function ProfileComponent() {
  return (
    <div className='mx-auto min-h-screen bg-[#0b0c0d] pt-[100px] w-full px-10 flex flex-col items-center'>
      <div className='bg-[#1b1d1e] w-[150px] h-[150px] p-6 text-[3rem] rounded-full flex justify-center items-center'>
        D
      </div>
      <p className='my-4 text-[1.3rem] font-bold'>Dexter</p>
      <div className='flex items-center'> <img
        src='/logonew.png'
        alt='logo'
        className='w-[20px] h-[20px] object-cover'
        /> dexter_x</div>
        <div className='flex w-full justify-center items-center gap-4'>
        <Button
          buttonClassName='w-fit mt-4 rounded-full'
        >
          Share
        </Button>
        <Button
          buttonClassName='w-fit mt-4 rounded-full'
        >
          Edit Profile
        </Button>
       
      </div>
      <div className='w-full flex justify-center items-center'>
      {/* <TabsComponent/> */}
      </div>
    </div>
  )
}

export default ProfileComponent