import { createUseStyles } from 'react-jss'
import { ITextProps, TTextComponent } from './text.types'

import { theme } from '../../../utils/theme'

export const useTextStyles = createUseStyles(() => ({
  root: (props: ITextProps) => ({
    ...theme.typography[(props.component as TTextComponent) || 'h1'],
    textAlign: props.align ? props.align : 'left',
  }),
}))
