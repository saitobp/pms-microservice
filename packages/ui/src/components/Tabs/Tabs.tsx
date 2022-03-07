import React, { FC, Children, isValidElement, ReactElement, useState, ReactNode } from 'react'
import { ITabItemProps } from './components/TabItem/utils/tabItem.types'
import { ITabsProps } from './utils/tabs.types'

import { TabSelector } from './components/TabSelector'

const Tabs: FC<ITabsProps> = props => {
  const { children, initialTab } = props

  const tabsName: string[] = []
  const tabsChildren: ReactNode[] = []

  const [selectedTab, setSelectedTab] = useState<number>(initialTab || 0)

  Children.map(children, child => {
    if (!isValidElement<ITabItemProps>(child)) return child

    const elementChild: ReactElement<ITabItemProps> = child

    if (!elementChild.props.tabName) throw new Error('Please use only TabItem Components inside Tabs')

    tabsName.push(elementChild.props.tabName)
    tabsChildren.push(elementChild.props.children)
    return elementChild
  })

  return (
    <div>
      <div>
        {tabsName.map((name, index) => (
          <TabSelector key={`tabsNameId-${index}`} tabName={name} onClick={() => setSelectedTab(index)} />
        ))}
      </div>

      <div>
        {tabsName.map((name, index) => {
          if (selectedTab !== index) return null

          return <div key={`tabsContentId-${index}`}>{tabsChildren[index]}</div>
        })}
      </div>
    </div>
  )
}

export default Tabs
