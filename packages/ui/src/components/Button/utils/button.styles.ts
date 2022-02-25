import { createUseStyles } from 'react-jss'

import { uiTheme } from '../../../utils/ui.theme'

import { IButtonProps } from './button.types'

export const useButtonStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'montserrat',
    background: 'none',
    color: ({ primary }: IButtonProps) => (primary ? uiTheme.pallete.white : uiTheme.pallete.black),
    border: `1px solid ${uiTheme.pallete.black}`,
    backgroundColor: ({ primary }: IButtonProps) => (primary ? uiTheme.pallete.black : ''),
    padding: uiTheme.spacing.small,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    transition: '250ms background',
    minWidth: '96px',

    '&:hover': {
      background: ({ primary }: IButtonProps) => (primary ? uiTheme.pallete.white : uiTheme.pallete.black),
      color: ({ primary }: IButtonProps) => (primary ? uiTheme.pallete.black : uiTheme.pallete.white),
    },
  },
}))
