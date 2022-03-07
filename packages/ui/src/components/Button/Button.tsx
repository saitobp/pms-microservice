import React, { FC } from 'react'

import { IButtonProps } from './utils/button.types'
import { useButtonStyles } from './utils/button.styles'

const Button: FC<IButtonProps> = props => {
  const { children, className, variant } = props

  const classes = useButtonStyles(props)

  return (
    <button {...props} className={` ${classes.root} ${classes[variant || 'default']} ${className}`}>
      {children || 'Click Me!'}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  variant: 'default',
  isSelected: false,
}

export default Button
