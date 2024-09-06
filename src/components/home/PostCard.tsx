// PostCard.tsx
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    imgSrc: string,
    title: string,
    user: string,
    date: string,
    containerClassName?: string // Optional to avoid passing it every time
}

function PostCard({ imgSrc, title, user, date, containerClassName = '' }: Props) {
    return (
        <div className={cn('cursor-pointer hover:opacity-[.7] transition-all delay-100 h-fit p-2 bg-[#1b1d1e] rounded-2xl shadow-md', containerClassName)}>
            <img
                className='w-full object-cover rounded-2xl'
                src={imgSrc}
                alt='art'
            />
            <div className='p-2'>
                <p className='text-lg font-bold'>{title}</p>
                <p className='text-sm text-gray-500'>{user}</p>
                <p className='text-sm text-gray-400'>{date}</p>
            </div>
        </div>
    )
}

export default PostCard