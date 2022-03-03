// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

// import { INavItemProps } from '../utils/navItem.types'

// export const useNavItemSelected = (props: INavItemProps) => {
// const { item } = props

// const [isSelected, setIsSelected] = useState<boolean>(false)
// const location = useLocation()

// useEffect(() => {
//   if (location.pathname === item.path) {
//     setIsSelected(true)
//   } else {
//     setIsSelected(false)
//   }
// }, [item.path, location.pathname])

// return { isSelected }
// }
