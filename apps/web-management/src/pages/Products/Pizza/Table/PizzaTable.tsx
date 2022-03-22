import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const PizzaTable: FC = () => {
  return (
    <div>
      <h1>Lista de Pizzas</h1>

      <Outlet />
    </div>
  )
}
