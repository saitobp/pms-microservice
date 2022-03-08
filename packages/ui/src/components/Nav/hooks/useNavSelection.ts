import { useState } from 'react'

import { INavProps } from '../utils/nav.types'

export const useNavSelection = ({ defaultSelected }: INavProps) => {
  const [selected, setSelected] = useState<number>(defaultSelected || 0)

  const handleClick = (index: number, callback?: () => void) => {
    if (callback) callback()

    setSelected(index)
  }

  return { selected, handleClick }
}
