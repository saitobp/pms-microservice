export interface IButtonProps {
  className?: string
  onClick?: () => void
  primary?: boolean
  variant?: TButtonVariant
  isSelected?: boolean
}

type TButtonVariant = 'tab' | 'default'
