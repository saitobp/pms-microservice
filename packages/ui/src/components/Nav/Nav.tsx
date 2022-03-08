import React, { FC } from 'react'

import Text from '../Text/Text'
import NavItem from '../Nav/components/NavItem/NavItem'

import { useNavStyles } from './utils/nav.styles'
import { INavProps } from './utils/nav.types'
import { useNavSelection } from './hooks/useNavSelection'

const Nav: FC<INavProps> = props => {
  const { items, title, noTitle, orientation } = props

  const { selected, handleClick } = useNavSelection(props)
  const classes = useNavStyles(props)

  return (
    <nav className={classes.root}>
      {!noTitle && (
        <div className={classes.title}>
          <Text component='h4'>{title}</Text>
        </div>
      )}

      <div className={classes.navItems}>
        {items.map((item, index) => (
          <NavItem
            key={item.name}
            item={item}
            orientation={orientation}
            isSelected={index === selected}
            onClick={() => handleClick(index, item.onClick)}
          />
        ))}
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  orientation: 'vertical',
  noTitle: false,
  defaultSelected: 0,
}

export default Nav
