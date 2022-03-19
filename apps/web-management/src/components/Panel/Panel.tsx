import { FC } from 'react'
import { createPortal } from 'react-dom'
import { MdClose } from 'react-icons/md'

import { usePortal } from '../../hooks/usePortal'

import css from './styles/panel.module.css'

import { IPanelProps } from './utils/panel.types'

const Panel: FC<IPanelProps> = props => {
  const { title, children } = props

  const { portal } = usePortal('panel-portal')

  return createPortal(
    <div className={css.overlay}>
      <div className={css.root}>
        <header className={css.header}>
          <h1 className={css.title}>{title ? title : null}</h1>

          <MdClose className={css.icon} />
        </header>

        <main className={css.main}>
          {children}
          {/* <div className='overflow-y-auto h-full'>{children}</div> */}
        </main>

        <footer className={css.footer}>
          <button className={`${css.button} ${css.buttonPrimary}`}>Salvar</button>
          <button className={css.button}>Fechar</button>
        </footer>
      </div>
    </div>,
    portal,
  )
}

export default Panel
