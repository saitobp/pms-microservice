import React, { FC } from 'react'

import Text from '../Text/Text'
import NavItem from '../Nav/components/NavItem/NavItem'

import { useNavStyles } from './utils/nav.styles'
import { INavProps } from './utils/nav.types'

const Nav: FC<INavProps> = props => {
  const { items, title } = props
  const classes = useNavStyles()

  return (
    <nav className={classes.root}>
      <div className={classes.title}>
        <Text component='h4'>{title}</Text>
      </div>

      <div className={classes.navItems}>
        {items.map(item => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>
    </nav>
  )
}

export default Nav
