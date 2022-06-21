import { FC } from 'react'
import { Button, Group, Input, Paper, Title } from '@mantine/core'
import { Search } from 'tabler-icons-react'

import { IListHeaderProps } from './types/IListHeaderProps'

const ListHeader: FC<IListHeaderProps> = (props) => {
  const { text, btnAction } = props

  return (
    <Paper shadow='xs' radius='sm' p='md' mb='xs' style={{ position: 'sticky', top: 0 }}>
      <Group position='apart'>
        <Group>
          <Title order={5} pl='xs'>
            {text}
          </Title>

          <Input placeholder='Pesquisar...' icon={<Search />} disabled />
        </Group>

        <Button onClick={btnAction} color='dark'>
          Novo
        </Button>
      </Group>
    </Paper>
  )
}

export default ListHeader
