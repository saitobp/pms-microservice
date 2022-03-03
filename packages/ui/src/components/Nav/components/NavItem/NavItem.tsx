import React, { FC } from 'react'

import Text from '../../../Text/Text'

import { useNavItemStyles } from './utils/navItem.styles'
import { INavItemProps } from './utils/navItem.types'

const NavItem: FC<INavItemProps> = props => {
  const { item } = props

  const classes = useNavItemStyles()

  return (
    <span role='button' tabIndex={0} className={classes.root}>
      <i>{item.icon ? <item.icon className={classes.icon} size='1.25rem' /> : null}</i>

      <Text component='p'>{item.name}</Text>
    </span>
  )
}

export default NavItem
