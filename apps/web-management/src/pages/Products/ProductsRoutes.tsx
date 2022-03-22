import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Products } from './index'
import { ItemListForm, ItemListTable } from './ItemList'
import { ItemTypeForm, ItemTypeTable } from './ItemType'

import { PizzaTable } from './Pizza/Table/PizzaTable'
import { PizzaForm } from './Pizza/Form/PizzaForm'

const ProductsRoutes: FC = () => {
  return (
    <Routes>
      <Route path='products' element={<Products />}>
        <Route path='item-list' element={<ItemListTable />}>
          <Route path='new' element={<ItemListForm />} />
        </Route>

        <Route path='item-type' element={<ItemTypeTable />}>
          <Route path='new' element={<ItemTypeForm />} />
        </Route>

        <Route path='pizzas' element={<PizzaTable />}>
          <Route path='new' element={<PizzaForm />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default ProductsRoutes
