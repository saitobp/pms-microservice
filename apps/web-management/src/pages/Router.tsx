import { FC, useEffect } from 'react'
import { Nav, INavItem } from '@pms-microservices/ui'
import { Routes, Route } from 'react-router-dom'

import { Products } from './Products'

const items: INavItem[] = [{ name: 'Produtos', path: '/' }]

const Router: FC = () => {
  useEffect(() => {
    document.getElementById('root')?.setAttribute('style', 'display: flex; height: 100vh')
  })

  return (
    <>
      <Nav title='Pizzaria Management System' items={items} />

      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </>
  )
}

export default Router
