import { FC } from 'react'
import { Table } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import { ListLayout, ListItemMenu } from '../../../components'

import { useCustomersList } from './hooks/useCustomersList'

const CustomersList: FC = () => {
  const navigate = useNavigate()
  const { customersQuery } = useCustomersList()

  return (
    <>
      <ListLayout
        headerText='Lista de Clientes'
        headerBtnAction={() => navigate('./new')}
        isLoading={customersQuery.isLoading || !customersQuery.data}
      >
        <Table highlightOnHover={customersQuery.data?.data.data.length !== 0}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>

              <ListItemMenu.Header />
            </tr>
          </thead>

          {customersQuery.data?.data.data.length === 0 && (
            <tbody>
              <tr>
                <td>Sem clientes cadastrados...</td>
              </tr>
            </tbody>
          )}

          {customersQuery.data?.data.data.length !== 0 && (
            <tbody>
              {customersQuery.data?.data.data.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <ListItemMenu onClick={() => navigate(`./edit/${customer.id}`)} />
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </ListLayout>
    </>
  )
}

export default CustomersList
