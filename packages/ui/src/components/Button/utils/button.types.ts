import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string
  onClick?: () => void
  primary?: boolean
  variant?: TButtonVariant
  isSelected?: boolean
}

type TButtonVariant = 'tab' | 'default'
