import { FC, useEffect } from 'react'
import { Nav, INavItem } from '@pms-microservices/ui'

import { ProductsRoutes } from './Products'

const items: INavItem[] = [{ name: 'Produtos' }]

const Router: FC = () => {
  useEffect(() => {
    document.getElementById('root')?.setAttribute('style', 'display: flex; height: 100vh')
  })

  return (
    <>
      <Nav title='Pizzaria Management System' items={items} />

      <ProductsRoutes />
    </>
  )
}

export default Router
