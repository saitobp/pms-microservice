export interface ITabSelection {
  onClick: (index: number) => void
  tabsName: string[]
  currentTab: number
}
