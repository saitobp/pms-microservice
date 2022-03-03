import React, { FC } from 'react'

import { useContainerStyles } from './utils/container.styles'
import { IContainerProps } from './utils/container.types'

const Container: FC<IContainerProps> = props => {
  const { children } = props

  const classes = useContainerStyles(props)

  return <div className={classes.root}>{children}</div>
}

Container.defaultProps = {
  layout: 'row',
  height: 'auto',
}

export default Container
