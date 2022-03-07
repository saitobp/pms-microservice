import { createUseStyles } from 'react-jss'

import { theme } from '../../../utils/theme'

import { IButtonProps } from './button.types'

export const useButtonStyles = createUseStyles(() => ({
  root: {
    minWidth: '96px',
    fontFamily: 'montserrat',
    font: 'inherit',
    background: 'none',
    cursor: 'pointer',
    outline: 'inherit',
    padding: theme.spacing.small,
  },

  default: {
    color: ({ primary }: IButtonProps) => (primary ? theme.pallete.white : theme.pallete.black),
    border: `1px solid ${theme.pallete.black}`,
    backgroundColor: ({ primary }: IButtonProps) => (primary ? theme.pallete.black : ''),
    transition: `${theme.transitions.fast} background`,

    '&:hover': {
      background: ({ primary }: IButtonProps) => (primary ? theme.pallete.white : theme.pallete.black),
      color: ({ primary }: IButtonProps) => (primary ? theme.pallete.black : theme.pallete.white),
    },
  },

  tab: {
    border: 'none',
    borderBottom: ({ isSelected }: IButtonProps) => (isSelected ? `1px solid ${theme.pallete.black}` : 'transparent'),
    transition: `${theme.transitions.fast} border-bottom`,

    '&:hover': {
      borderBottom: `1px solid ${theme.pallete.black}`,
    },
  },
}))
