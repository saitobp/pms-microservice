import { LoadingOverlay, Paper } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { ListHeader } from '../ListHeader'

import { IListLayoutProps } from './types/IListLayoutProps'

export const ListLayout: FC<IListLayoutProps> = (props) => {
  const { children, isLoading, headerText, headerBtnAction } = props

  if (isLoading) {
    return <LoadingOverlay visible />
  }

  return (
    <>
      <ListHeader text={headerText} btnAction={headerBtnAction} />

      <Paper shadow='xs' radius='sm' p='md'>
        {children}
      </Paper>

      <Outlet />
    </>
  )
}

export default ListLayout
