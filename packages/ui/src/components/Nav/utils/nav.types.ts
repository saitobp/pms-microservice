import { INavItem } from '../components/NavItem/utils/navItem.types'

export interface INavProps {
  items: INavItem[]
  title?: string
  orientation?: TNavOrientation
  noTitle?: boolean
  defaultSelected?: number
}

export type TNavOrientation = 'vertical' | 'horizontal'
