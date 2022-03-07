import { createUseStyles } from 'react-jss'

import { theme } from '../../../../../utils/theme'

export const useNavItemStyles = createUseStyles(() => ({
  root: {
    listStyle: 'none',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: '300',
    borderLeft: `${theme.spacing.tiny} solid transparent`,
    userSelect: 'none',
    transition: '200ms background',

    '&:hover': {
      backgroundColor: theme.pallete.black,
      color: theme.pallete.white,
    },
  },

  selectedItem: {
    borderLeft: `${theme.spacing.tiny} solid ${theme.pallete.black}`,
  },

  icon: {
    marginRight: theme.spacing.large,
  },
}))
