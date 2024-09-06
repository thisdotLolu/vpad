'use client'
import React, { useState } from 'react'
import clsx from 'clsx';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { cn } from '@/lib/utils';


type Props = {
    label?: string,
    placeholder?: string,
    type?:string,
    inputContainerClassName?:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value?:string,
    leftIcon?: any,
    labelClassName?:string,
    disabled?:boolean,
    mainInputClassName?:string,
    name?:string,
    max?:number
}

function Input({max,name,mainInputClassName,label,placeholder,type,inputContainerClassName,value,onChange,leftIcon,labelClassName,disabled }: Props) {
    const [showPreview, setShowPreview] = useState(false);


    const handleTogglePreview = () => {
        setShowPreview(prev => !prev);
    };
    return (
        <label 
        className={clsx('w-full text-white')}
        htmlFor={label}>
            <p className={cn('mb-1 text-[0.87rem] font-semibold',labelClassName)}>{label}</p>
            <div className={cn('bg-[#1b1d1e]  w-full h-11 flex items-center justify-start p-3 rounded-lg',inputContainerClassName)}>
            {leftIcon && <div className='mr-2'>{leftIcon}</div>}
                <input
                    maxLength={max}
                    name={name}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    type={type === 'password' ? (showPreview ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    id={label}
                    className={cn('outline-none border-none w-full focus:border-[#4c9bd4] text-white placeholder:text-[.9rem] bg-transparent placeholder:text-[#667085]',mainInputClassName)}
                />
                {type ==='password' && <div 
              onClick={handleTogglePreview}
              className='ml-2 cursor-pointer'>
             {showPreview ? <BsEyeSlash/> : <BsEye/>}
            </div>}
            </div>
        </label>
        
    )
}

export default Input;