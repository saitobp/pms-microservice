import { createUseStyles } from 'react-jss'

import { IContainerProps } from './container.types'

export const useContainerStyles = createUseStyles(() => ({
  root: {
    width: '100%',
    height: (props: IContainerProps) => props.height || 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: (props: IContainerProps) => props.layout || 'column',
  },
}))
