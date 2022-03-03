import { createUseStyles } from 'react-jss'
import { ITextProps, TTextComponent } from './text.types'

import { uiTheme } from '../../../utils/ui.theme'

export const useTextStyles = createUseStyles(() => ({
  root: (props: ITextProps) => ({
    ...uiTheme.typography[(props.component as TTextComponent) || 'h1'],
    textAlign: props.align ? props.align : 'left',
  }),
}))
