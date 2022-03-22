import { css } from '@emotion/react'

export const useStyles = () => {
  const styles = {
    drawer: css({
      width: '33.333%',

      '& .MuiDrawer-paper': {
        width: '33.333%',
        boxSizing: 'border-box',
      },
    }),

    header: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),

    main: css({
      height: '100%',
      overflow: 'auto',
    }),
  }

  return { styles }
}
