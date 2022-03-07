import React, { FC } from 'react'

import { TabSelection } from './components/TabSelector'

import { ITabsProps } from './utils/tabs.types'
import { useTabsStyles } from './utils/tabs.styles'
import { useTabs } from './hooks/useTabs'

const Tabs: FC<ITabsProps> = props => {
  const { children } = props

  const { tabs } = useTabs(props, children)
  const classes = useTabsStyles()

  return (
    <div>
      <TabSelection tabsName={tabs.names} onClick={tabs.setSelected} currentTab={tabs.selected} />

      <div className={classes.tabContent}>
        {tabs.names.map((name, index) => {
          if (tabs.selected !== index) return null

          return <div key={`tabsContentId-${index}`}>{tabs.children[index]}</div>
        })}
      </div>
    </div>
  )
}

export default Tabs
