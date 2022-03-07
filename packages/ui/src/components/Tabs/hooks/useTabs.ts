import { Children, isValidElement, ReactElement, ReactNode, useState } from 'react'
import { ITabItemProps } from '../components/TabItem/utils/tabItem.types'

import { ITabsProps } from '../index'

export const useTabs = ({ initialTab }: ITabsProps, children: ReactNode) => {
  const [selectedTab, setSelectedTab] = useState(initialTab || 0)

  const tabsName: string[] = []
  const tabsChildren: ReactNode[] = []

  Children.map(children, child => {
    if (!isValidElement<ITabItemProps>(child)) return child

    const elementChild: ReactElement<ITabItemProps> = child

    if (!elementChild.props.tabName) throw new Error('Please use only TabItem Components inside Tabs')

    tabsName.push(elementChild.props.tabName)
    tabsChildren.push(elementChild.props.children)
    return elementChild
  })

  const tabs = {
    selected: selectedTab,
    setSelected: setSelectedTab,
    names: tabsName,
    children: tabsChildren,
  }

  return { tabs }
}
