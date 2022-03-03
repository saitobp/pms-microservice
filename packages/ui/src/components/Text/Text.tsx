import { FC, createElement } from 'react'

import { ITextProps } from './utils/text.types'
import { useTextStyles } from './utils/text.styles'

const Text: FC<ITextProps> = props => {
  const { children, component = 'h1', className } = props

  const classes = useTextStyles(props)

  return createElement(component, { className: `${classes.root} ${className}` }, children)
}

Text.defaultProps = {
  component: 'h1',
}

export default Text
