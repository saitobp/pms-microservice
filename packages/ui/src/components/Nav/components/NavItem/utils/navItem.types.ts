import { IconType } from 'react-icons'

import { TNavOrientation } from '../../../utils/nav.types'

export interface INavItemProps {
  item: INavItem
  orientation?: TNavOrientation
  isSelected?: boolean
  onClick: () => void
}

export interface INavItem {
  name: string
  icon?: IconType
  onClick?: () => void
}
