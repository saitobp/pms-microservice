import { createUseStyles } from 'react-jss'

import { theme } from '../../../utils/theme'

export const useNavStyles = createUseStyles(() => ({
  root: {
    width: '280px',
    maxHeight: '100%',
    borderRight: `2px solid ${theme.pallete.lightGray}`,
    color: theme.pallete.black,
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.medium} 0`,
  },

  title: {
    padding: `0 ${theme.spacing.medium}`,
    marginBottom: '10%',
  },

  navItems: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: `0 ${theme.spacing.medium}`,
  },
}))
