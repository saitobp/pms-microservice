import { createUseStyles } from 'react-jss'

import { theme } from '../../../utils/theme'

import { INavProps } from './nav.types'

export const useNavStyles = createUseStyles({
  root: {
    width: ({ orientation }: INavProps) => (orientation === 'vertical' ? '280px' : '100%'),
    maxHeight: '100%',
    borderRight: ({ orientation }: INavProps) =>
      orientation === 'vertical' ? `2px solid ${theme.pallete.lightGray}` : null,
    color: theme.pallete.black,
    display: 'flex',
    flexDirection: ({ orientation }: INavProps) => (orientation === 'vertical' ? 'column' : 'row'),
    padding: `${theme.spacing.medium} 0`,
    borderBottom: ({ orientation }: INavProps) =>
      orientation === 'vertical' ? null : `1px solid ${theme.pallete.lightGray}`,
    marginBottom: ({ orientation }: INavProps) => (orientation === 'vertical' ? null : theme.spacing.medium),
  },

  title: {
    padding: `0 ${theme.spacing.medium}`,
    marginBottom: '10%',
  },

  navItems: {
    display: 'flex',
    flexDirection: ({ orientation }: INavProps) => (orientation === 'vertical' ? 'column' : 'row'),
    gap: ({ orientation }: INavProps) => (orientation === 'vertical' ? '0px' : theme.spacing.medium),
    overflowY: 'auto',
    padding: `0 ${theme.spacing.medium}`,
  },
})
