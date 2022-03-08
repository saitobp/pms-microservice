import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ProductListTable: FC = () => {
  return (
    <div>
      <h1>Listagem de Produtos</h1>

      <Outlet />
    </div>
  )
}

export default ProductListTable
