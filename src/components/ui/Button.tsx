import React from 'react'
import clsx from 'clsx'
import { cn } from '@/lib/utils';

interface ButtonTypes {
    onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
    children:React.ReactNode,
    buttonClassName?:string,
    disabled?:boolean
}


function Button({onClick,children,buttonClassName,disabled=false}:ButtonTypes) {
  return (
    <button
    onClick={onClick}
    className={cn('px-10 w-full rounded-lg bg-[#4c9bd4] h-11 disabled:opacity-[.3] disabled:cursor-not-allowed', buttonClassName)}
    disabled={disabled}
    >
     {children}
        
    </button>
  )
}

export default Button