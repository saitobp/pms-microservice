import React, { FC } from 'react'
import { ITabSelectorProps } from './utils/tabSelector.types'

const TabSelector: FC<ITabSelectorProps> = props => {
  const { tabName } = props

  return <button>{tabName}</button>
}

export default TabSelector
