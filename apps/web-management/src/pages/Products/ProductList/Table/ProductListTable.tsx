import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ProductListTable: FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Listagem de Produtos</h1>

      <Outlet />
    </div>
  )
}

export default ProductListTable
