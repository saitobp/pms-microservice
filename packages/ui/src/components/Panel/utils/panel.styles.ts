import { createUseStyles } from 'react-jss'

import { uiTheme } from '../../../utils/ui.theme'

export const usePanelStyles = createUseStyles({
  overlay: {
    position: 'absolute',
    top: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: uiTheme.semanticColors.overlayBackground,
  },

  root: {
    position: 'absolute',
    right: '0',
    width: '400px',
    height: '100%',
    backgroundColor: uiTheme.pallete.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: uiTheme.spacing.medium,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  closeBtn: {
    cursor: 'pointer',
  },

  content: {
    height: '100%',
    overflowY: 'auto',
    margin: `${uiTheme.spacing.large} 0`,
  },

  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  outside: {
    width: 'auto',
    height: '100%',
  },
})
