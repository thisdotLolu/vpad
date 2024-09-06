'use client'
import React from 'react'
import Navbar from '../ui/Navbar'
import { FaTimes } from 'react-icons/fa'
import Input from '../ui/Input'
import { useRouter } from 'next/navigation'


function SignUpComponent() {
  const router = useRouter()
  return (
    <div className='bg-[#0b0c0d] h-screen w-full'>
    <Navbar />
    <div className='z-[1000000] fixed flex items-center justify-center h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.1)]'>
      <div className='bg-[#000] p-5 rounded-3xl modal flex flex-col items-center justify-start 2xl:h-fit h-[500px] overflow-y-scroll  mx-auto max-w-[1200px]'>
        <div className='flex w-full cursor-pointer justify-end'>
          <FaTimes
          size={20}
          onClick={()=>router.back()}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/logonew.png'
            className='w-[40px] h-[40px]'
          />
          <p className='text-[1.2rem] font-semibold'>Welcome To VPad!</p>
        </div>
        <div className='flex flex-col items-center p-6 h-[fit-content] w-[350px] rounded-lg'>
            <Input
              label='Username'
              placeholder='Enter your desired username'
            />
            <Input
              label='Nickname'
              placeholder='Enter your nickname'
              labelClassName='mt-[20px]'
            />
            <Input
              label='Email'
              placeholder='Email Address'
              labelClassName='mt-[20px]'
            />
            <Input
              label='Password'
              type='password'
              labelClassName='mt-[20px]'
            />
            <label 
            className='w-full mt-[20px]'
            htmlFor="about">
                <p className='text-[.9rem] mt-1'>About:</p>
                <textarea 
                placeholder='Say something about yourself...'
                className='h-[100px] w-full bg-[#1b1d1e] p-2 placeholder:text-[.9rem] placeholder:text-[#667085] outline-none border-none rounded-lg '
                name="" id="about">

                </textarea>
            </label>

        </div>
      </div>
    </div>

  </div>
  )
}

export default SignUpComponent