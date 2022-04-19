import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  root: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.black,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}))
