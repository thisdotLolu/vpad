import React from 'react'
import Navbar from '../ui/Navbar'
import { FaTimes } from 'react-icons/fa'
import { Input } from '@nextui-org/react'

function SignInComponent() {
  return (
    <div className='bg-[#0b0c0d] h-screen w-full'>
    <Navbar />
    <div className='z-[1000] fixed flex items-center justify-center h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.1)]'>
      <div className='bg-[#000] p-5 rounded-3xl flex flex-col items-center justify-center h-fit mx-auto max-w-[1200px]'>
        <div className='flex w-full cursor-pointer justify-end'>
          <FaTimes
          size={20}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/logo_whitebg.png'
            className='w-[40px] h-[40px]'
          />
          <p className='text-[1.2rem] font-semibold'>Welcome Back!</p>
        </div>
        <div className='flex flex-col items-center p-10 h-[fit-content] w-[500px] rounded-lg'>
          {/* <label
            className='w-full'
            htmlFor="">
            <p>Email:</p>
            <input
              type='text'
              className='h-[40px] mb-6 rounded-lg bg-[#1b1d1e] w-[100%]'
            />
          </label> */}
          <Input
          type="email" 
          className='!bg-[#1b1d1e]'
          label="Email"
          />
          <label
            className='w-full'
            htmlFor="
        ">
            <p>Password:</p>
            <input
              type='text'
              className='h-[40px] mb-6 rounded-lg outline-none bg-[#1b1d1e] w-[100%]'
            />
          </label>

        </div>
      </div>
    </div>

  </div>
  )
}

export default SignInComponent