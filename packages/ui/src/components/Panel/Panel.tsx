import React, { FC } from 'react'
import { createPortal } from 'react-dom'
import { MdClose } from 'react-icons/md'

import Text from '../Text/Text'
import Button from '../Button/Button'

import { usePanelPortal } from './hooks/usePanelPortal'
import { usePanelStyles } from './utils/panel.styles'

import { IPanelProps } from './utils/panel.types'

const Panel: FC<IPanelProps> = props => {
  const { children, isOpen, onClose, title, formId } = props

  const { modal } = usePanelPortal()
  const classes = usePanelStyles()

  if (!isOpen) return null

  return createPortal(
    <div className={classes.overlay}>
      <section className={classes.root}>
        <div className={classes.header}>
          <Text component='h4'>{title}</Text>

          <MdClose size='1.35rem' className={classes.closeBtn} onClick={() => onClose()} />
        </div>

        <main className={classes.content}>{children}</main>

        <div className={classes.actions}>
          <Button type='submit' form={formId}>
            Salvar
          </Button>
          <Button onClick={() => onClose()}>Fechar</Button>
        </div>
      </section>

      <div
        role={'button'}
        tabIndex={0}
        className={classes.outside}
        onClick={() => console.log('click')}
        onKeyPress={e => (e.key === 'Enter' ? console.log('enter') : null)}
      />
    </div>,
    modal,
  )
}

export default Panel
