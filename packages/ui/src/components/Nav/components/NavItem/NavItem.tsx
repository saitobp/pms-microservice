import React, { FC } from 'react'

import { Button } from '../../../Button'

import { useNavItemStyles } from './utils/navItem.styles'
import { INavItemProps } from './utils/navItem.types'

const NavItem: FC<INavItemProps> = props => {
  const { item, isSelected, onClick } = props

  const classes = useNavItemStyles()

  return (
    <span role='button' tabIndex={0} className={classes.root}>
      <i>{item.icon ? <item.icon className={classes.icon} size='1.25rem' /> : null}</i>

      <Button variant={'tab'} isSelected={isSelected} onClick={onClick}>
        {item.name}
      </Button>
    </span>
  )
}

export default NavItem
