import { ButtonHTMLAttributes, FC } from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/lib/utils'


const buttonVariants = cva(
    'flex items-center justify-center text-center transition-all p-2 text-[1.1rem] rounded-[35px]',
    {
        variants:{
            variant:{
                  default:"bg-[#4c9bd4] hover:opacity-[0.9]",
                  outline:"border-[#4c9bd4] border"
            },
            size:{
                default:'h-10 py-2 px-4',
                sm:"h-9 px-2 rounded-md"
            }
        },
        defaultVariants:{
            variant:'default',
            size:'default'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
  
}


const Button: FC<ButtonProps> = ({className,size,variant,...props}) => {
  return <button 
  {...props}
  className={cn()}
  ></button>
}

export {Button,buttonVariants}