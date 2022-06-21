import { FC } from 'react'
import { Menu } from '@mantine/core'

import { ListItemMenuHeader } from './components/ListItemMenuHeader/ListItemMenuHeader'
import { IListItemMenuProps } from './types/IListItemMenuProps'

const ListItemMenu: FC<IListItemMenuProps> & { Header: FC } = (props) => {
  const { onClick } = props

  return (
    <td align='center'>
      <Menu>
        <Menu.Label>Opções</Menu.Label>
        <Menu.Item onClick={onClick}>Editar</Menu.Item>
      </Menu>
    </td>
  )
}

ListItemMenu.Header = ListItemMenuHeader

export default ListItemMenu
