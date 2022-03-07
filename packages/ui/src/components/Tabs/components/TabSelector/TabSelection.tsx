import React, { FC } from 'react'

import { Button } from '../../../Button'

import { ITabSelection } from './utils/tabSelector.types'

const TabSelection: FC<ITabSelection> = props => {
  const { tabsName, onClick, currentTab } = props

  return (
    <div>
      {tabsName.map((name, index) => (
        <Button
          key={`tabNameId-${index}`}
          onClick={() => onClick(index)}
          variant='tab'
          isSelected={currentTab === index}
        >
          {name}
        </Button>
      ))}
    </div>
  )
}

export default TabSelection
