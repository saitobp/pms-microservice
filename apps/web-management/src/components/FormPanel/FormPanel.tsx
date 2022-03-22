import { FC } from 'react'
import { Drawer, Typography, IconButton, Button } from '@mui/material'
import { Close } from '@mui/icons-material'

import { useStyles } from './utils/formPanel.styles'
import { IFormPanelProps } from './utils/formPanel.types'

export const FormPanel: FC<IFormPanelProps> = props => {
  const { children, title, formId, onSubmit, onClose } = props

  const { styles } = useStyles()

  return (
    <Drawer open anchor='right' css={styles.drawer} onClose={onClose}>
      <header css={styles.header}>
        <Typography variant='h5' component='h1'>
          {title}
        </Typography>

        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </header>

      <main css={styles.main}>
        <form id={formId} onSubmit={onSubmit}>
          {children}
        </form>
      </main>

      <footer>
        <Button type='submit' form={formId}>
          Salvar
        </Button>

        <Button onClick={onClose}>Fechar</Button>
      </footer>
    </Drawer>
  )
}
