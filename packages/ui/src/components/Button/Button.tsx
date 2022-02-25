import React, { FC } from 'react'

import { IButtonProps } from './utils/button.types'
import { useButtonStyles } from './utils/button.styles'

const Button: FC<IButtonProps> = props => {
  const { children, className } = props

  const classes = useButtonStyles(props)

  return (
    <button {...props} className={`${classes.root} ${className}`}>
      {children || 'Button'}
    </button>
  )
}

Button.defaultProps = {
  primary: false,
}

export default Button
