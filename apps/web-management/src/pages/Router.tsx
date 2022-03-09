import { FC, useEffect } from 'react'
import { Nav, INavItem } from '@pms-microservices/ui'
import { useNavigate } from 'react-router-dom'

import { ProductsRoutes } from './Products'

const Router: FC = () => {
  const navigate = useNavigate()

  const items: INavItem[] = [{ name: 'Produtos', onClick: () => navigate('/products') }]

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
