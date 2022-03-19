import React, { FC, InputHTMLAttributes } from 'react'

import { useBaseInputStyles } from './utils/baseInput.styles'

const BaseInput: FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  const { className } = props

  const classes = useBaseInputStyles()

  return <input className={`${className} ${classes.input}`} {...props} />
}

export default BaseInput
