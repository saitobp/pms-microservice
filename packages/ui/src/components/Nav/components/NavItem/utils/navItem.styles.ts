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
    userSelect: 'none',
    width: '100%',
  },

  selectedItem: {},

  icon: {
    marginRight: theme.spacing.large,
  },
}))
