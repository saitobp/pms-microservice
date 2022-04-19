import { FC } from 'react'
import { Group, UnstyledButton, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import { useStyles } from './styles/navbarItem.styles'
import { INavBarItemProps } from './utils/navbarItem.types'

const NavbarItem: FC<INavBarItemProps> = props => {
  const { label, url } = props

  const { classes } = useStyles()
  const navigate = useNavigate()

  return (
    <UnstyledButton className={classes.root} onClick={() => navigate(url)}>
      <Group>
        <Text size='sm'>{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

export default NavbarItem
