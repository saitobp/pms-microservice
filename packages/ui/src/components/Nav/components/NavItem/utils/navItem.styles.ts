import { createUseStyles } from 'react-jss'

import { uiTheme } from '../../../../../utils/ui.theme'

export const useNavItemStyles = createUseStyles(() => ({
  root: {
    listStyle: 'none',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: '300',
    borderLeft: `${uiTheme.spacing.tiny} solid transparent`,
    userSelect: 'none',
    transition: '200ms background',

    '&:hover': {
      backgroundColor: uiTheme.pallete.black,
      color: uiTheme.pallete.white,
    },
  },

  selectedItem: {
    borderLeft: `${uiTheme.spacing.tiny} solid ${uiTheme.pallete.black}`,
  },

  icon: {
    marginRight: uiTheme.spacing.large,
  },
}))
