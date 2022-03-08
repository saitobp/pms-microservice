import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Products } from './index'
import { ProductListForm, ProductListTable } from './ProductList'
import { ItemListForm, ItemListTable } from './ItemList'
import { ItemTypeForm, ItemTypeTable } from './ItemType'

const ProductsRoutes: FC = () => {
  return (
    <Routes>
      <Route path='products' element={<Products />}>
        <Route path='product-list' element={<ProductListTable />}>
          <Route path='new' element={<ProductListForm />} />
        </Route>

        <Route path='item-list' element={<ItemListTable />}>
          <Route path='new' element={<ItemListForm />} />
        </Route>

        <Route path='item-type' element={<ItemTypeTable />}>
          <Route path='new' element={<ItemTypeForm />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default ProductsRoutes
