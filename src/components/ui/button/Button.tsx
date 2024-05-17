import cn from "classnames"
import type { ButtonHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge'

export type ButtonType = 'filled' | 'outlined'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType
  label: string
  active?: boolean
  classNames?: string
}

export const Button = ({ buttonType, label, active, classNames, ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      type="button"
      className={twMerge(cn(
        'border-2 rounded-2xl',
        'focus-visible:ring-1',
        'font-medium text-lg',
        'py-2 px-3',
        'outline-none',
        {
          'border-yellow-200 bg-[#fff613]/30': active && buttonType === 'outlined',
          'border-slate-200 bg-white hover:bg-slate-100': !active && buttonType === 'outlined',
          'bg-[#fff613] border-yellow-100 hover:bg-[#eee502]': buttonType === 'filled',
        }
        ),
        classNames
      )
      }
    >
      {label}
    </button>
  )
}