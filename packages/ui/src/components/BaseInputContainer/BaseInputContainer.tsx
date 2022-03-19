import React, { FC } from 'react'

import { useBaseInputContainerStyles } from './utils/baseInputContainer.styles'

const BaseInputContainer: FC<{ id?: string }> = props => {
  const { children, id } = props

  const classes = useBaseInputContainerStyles()

  return (
    <div id={id} className={classes.container}>
      {children}
    </div>
  )
}

export default BaseInputContainer
