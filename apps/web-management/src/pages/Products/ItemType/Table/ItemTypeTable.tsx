import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ItemTypeTable: FC = () => {
  return (
    <div>
      <h1>Tipos de Items</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Possui configuração?</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Pizza</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>Bebida</td>
            <td>Não</td>
          </tr>
        </tbody>
      </table>

      <Outlet />
    </div>
  )
}

export default ItemTypeTable
