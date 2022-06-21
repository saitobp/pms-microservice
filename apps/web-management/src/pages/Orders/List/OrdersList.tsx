import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from '@mantine/core'

import { ListItemMenu, ListLayout } from '../../../components'

import { mock } from './utils/orderListMock'

const OrdersList: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <ListLayout
        headerText='Lista de Pedidos'
        headerBtnAction={() => navigate('./new')}
        isLoading={false}
      >
        <Table>
          <thead>
            <tr>
              <th>N° do pedido</th>
              <th>Tipo de entrega</th>
              <th>Cliente</th>
              <th>Telefone</th>
              <th>Total</th>
              <th>Status</th>
              <ListItemMenu.Header />
            </tr>
          </thead>

          <tbody>
            {mock.map((order, index) => (
              <tr key={index}>
                <td>{order.number}</td>
                <td>{order.type}</td>
                <td>{order.customer.name}</td>
                <td>{order.customer.phone}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <ListItemMenu onClick={() => navigate(`./edit/${order.id}`)} />
              </tr>
            ))}
          </tbody>
        </Table>
      </ListLayout>
    </>
  )
}

export default OrdersList
