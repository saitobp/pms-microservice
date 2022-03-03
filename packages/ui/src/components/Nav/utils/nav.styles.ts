import { createUseStyles } from 'react-jss'

import { uiTheme } from '../../../utils/ui.theme'

export const useNavStyles = createUseStyles(() => ({
  root: {
    width: '280px',
    maxHeight: '100%',
    borderRight: `2px solid ${uiTheme.pallete.lightGray}`,
    color: uiTheme.pallete.black,
    display: 'flex',
    flexDirection: 'column',
    padding: `${uiTheme.spacing.medium} 0`,
  },

  title: {
    padding: `0 ${uiTheme.spacing.medium}`,
    marginBottom: '10%',
  },

  navItems: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: `0 ${uiTheme.spacing.medium}`,
  },
}))
